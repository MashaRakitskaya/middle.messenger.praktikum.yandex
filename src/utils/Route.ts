import { renderDom } from "./renderDOM";
import { isEqual } from "./utils";

//Route хранит URL и соответствующий ему блок, умеет показывать, скрывать и создавать блоки.
class Route {
  private _pathname: any;
  private _blockClass: any;
  private _block: any;
  private _props: any;
  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  //создавать блоки
  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  //скрывать
  leave() {
    if (this._block) {
      this._block.remove();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  //отобразит(показывать) на экран нужный блок
  render() {
    this._block = new this._blockClass();
    renderDom(this._props.rootQuery, this._block);
    return;
  }
}

export default Route;
