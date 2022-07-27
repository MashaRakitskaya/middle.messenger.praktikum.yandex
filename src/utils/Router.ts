import Route from "./Route";

//Router отвечает только за изменение URL и вызывает Route;
class Router {
  static __instance: any;
  routes: any[];
  history: History;
  private _currentRoute: any;
  private _rootQuery: any;
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  // Конфигурируем роутер, указывая, на каких URL какую страницу отображать
  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  // запустить роутер
  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  //Изменять историю можно через методы pushState (добавляет запись в историю)
  go(pathname) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  // переход назад по истории браузера
  back() {
    this.history.back();
  }

  // переход вперёд по истории браузера
  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;
