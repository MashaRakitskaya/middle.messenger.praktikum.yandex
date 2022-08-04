import EventBus from "./EventBus";
import { set } from "./utils";

export enum StoreEvents {
  Updated = "updated",
}

type Indexed<T = any> = {
  [key in string]: T;
};

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public setState(path: string, value: any) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
