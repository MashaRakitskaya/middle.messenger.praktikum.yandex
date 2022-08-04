import HTTPTransport from "../HTTPTransport";

class Chats {
  private _baseUrl: string;
  private _chatsUrl: string;
  private _chatsUsersUrl: string;

  constructor() {
    this._baseUrl = "https://ya-praktikum.tech/api/v2";
    this._chatsUrl = `${this._baseUrl}/chats`;
    this._chatsUsersUrl = `${this._baseUrl}/chats/users`;
  }

  createChat({ title }) {
    return new HTTPTransport().post(this._chatsUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        title,
      },
    });
  }

  addUsersToChat({ users, chatId }) {
    return new HTTPTransport().post(this._chatsUsersUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        users,
        chatId,
      },
    });
  }

  deleteUsersFromChat({ users, chatId }) {
    return new HTTPTransport().delete(this._chatsUsersUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        users,
        chatId,
      },
    });
  }

  deleteChat({ chatId }) {
    return new HTTPTransport().delete(this._chatsUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        chatId,
      },
    });
  }

  getChats() {
    return new HTTPTransport().get(this._chatsUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {},
    });
  }
}

const chats = new Chats();
export default chats;
