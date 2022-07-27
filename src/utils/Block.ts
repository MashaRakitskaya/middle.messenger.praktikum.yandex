import EventBus from "./EventBus";
import { v4 as makeUUID } from "uuid";

const enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

type Props = Record<string, any>;

class Block {
  eventBus: () => EventBus;
  tagName: string;
  props: Props;
  private _element: HTMLElement;
  children: Record<string, any>;
  id: string;

  constructor(tagName = "div", propsAndChildren: Record<string, any> = {}) {
    const { children, props } = this._getChildren(propsAndChildren);
    this.children = children;
    //создаём Event Bus
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    this.id = makeUUID();
    //создаём Proxy-объекты
    this.props = this._makePropsProxy({ ...props, id: this.id });
    this.tagName = tagName;
    this._registerEvents(eventBus);
    eventBus.emit(Events.INIT);
  }

  //регистрация событий, подписка на изменения
  private _registerEvents(eventBus) {
    eventBus.on(Events.INIT, this.init.bind(this));
    eventBus.on(Events.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Events.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    this._element = this._createDocumentElement(this.tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Events.FLOW_RENDER);
  }

  private _componentDidMount(oldProps: Props) {
    this.componentDidMount(oldProps);
    //Теперь, когда для родительского компонента будет вызван componentDidMount, он последовательно будет вызван для всех потомков вниз по дереву компонентов.
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(oldProps: Props) {}

  //стригерить измения
  dispatchComponentDidMount() {
    this.eventBus().emit(Events.FLOW_CDM);
  }

  //отрисует новые данные.
  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  //Это место, где обновляется компонент в DOM'е.
  private _render() {
    const fragment = this.render();
    const element = fragment.firstElementChild as HTMLElement;
    this._removeEventListeners();
    this._element.innerHTML = "";
    this._element.replaceWith(element);
    this._element = element;
    this._addEventListeners();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement {
    return this.element;
  }

  private _makePropsProxy(props) {
    //Proxy-объект. Применение данного инструмента поможет использовать Event Bus, убрать какую-либо тесную связность между методами и подписываться только на события
    //target это сам обьект props а prop это key от полученого в проксти объекта props,
    const proxyProps = new Proxy(props, {
      //Когда мы читаем свойства объекта proxyProps, выполняется функция get
      get(target, prop: string) {
        if (prop.startsWith("_")) {
          throw new Error("нет доступа");
        } else {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        }
      },
      //Функция срабатывает при попытке задать значение свойству объекта:
      //value это передаваемое дополнительное значение при установке значения свойства
      set(target, prop: string, value) {
        if (prop.startsWith("_")) {
          throw new Error("нет доступа");
        } else {
          target[prop] = value;
          this.eventBus().emit(Events.FLOW_CDU, target);
          return true;
        }
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });

    return proxyProps;
  }

  private _createDocumentElement(tagName): HTMLElement {
    const element = document.createElement(tagName) as HTMLElement;
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  remove() {
    this.getContent().remove();
  }

  private _addEventListeners() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEventListeners() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  // из всех пропсов выделить компоненты и записать в свойство children
  private _getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template, props) {
    const propsAndStubs = { ...props };
    Object.entries(this.children).forEach(([key, child]) => {
      //добавляем заглушки в объект с пропсами
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    //Чтобы не рендерить заглушки на страницу, создадим временный контейнер.
    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    //Теперь нужно заменить заглушки на компоненты.
    fragment.innerHTML = template(propsAndStubs);
    //Рендерим наш шаблон в созданный элемент, а затем заменяем в нём заглушки на компоненты.
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      if (stub) stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }
}

export default Block;
