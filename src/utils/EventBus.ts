type Callback = () => void;

class EventBus {
  listeners: Record<string, Callback[]>;

  constructor() {
    // в обьекте listeners ключи имена событий, а значения массивы с обработчиками событий(callback)
    this.listeners = {};
  }

  //подписка на изменения
  //callback: функцию-обработчик, которая будет вызвана, когда придёт оповещение о событии
  on(eventName: string, callback: Callback): void {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
  }

  //отрисовка изменений
  //callback: функцию-обработчик, которая будет вызвана, когда придёт оповещение о событии
  off(eventName: string, callback: Callback): void {
    if (!this.listeners[eventName]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[eventName] = this.listeners[eventName].filter(
      (listener) => listener !== callback
    );
  }

  //оповещения подписчиков об изменениях
  emit(eventName: string, ...args: string[]): void {
    if (!this.listeners[eventName]) {
      throw new Error(`Нет события: ${eventName}`);
    }

    //Если у события есть подписчики, пробежимся по ним и вызовем каждый, передав данные.
    this.listeners[eventName].forEach(function (listener) {
      listener(...args);
    });
  }
}

export default EventBus;
