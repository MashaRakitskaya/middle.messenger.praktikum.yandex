import HTTPTransport from "../HTTPTransport";

class Chats {
  private _baseUrl: string;
  private _chatsUrl: string;
  private _chatsUsersUrl: string;
  private _tokenUrl: string;

  constructor() {
    this._baseUrl = "https://ya-praktikum.tech/api/v2";
    this._chatsUrl = `${this._baseUrl}/chats`;
    this._chatsUsersUrl = `${this._baseUrl}/chats/users`;
    this._tokenUrl = `${this._baseUrl}/chats/token/`;
  }

  createChat({ title }: { title: string }) {
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

  addUsersToChat({ users, chatId }: { users: string[]; chatId: string }) {
    return new HTTPTransport().put(this._chatsUsersUrl, {
      method: "PUT",
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

  deleteUsersFromChat({ users, chatId }: { users: string[]; chatId: string }) {
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

  deleteChat({ chatId }: { chatId: string }) {
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

  getChatUsers({ chatId }: { chatId: string }) {
    return new HTTPTransport().get(`${this._baseUrl}/chats/${chatId}/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {},
    });
  }

  getChatToken({ chatId }: { chatId: string }) {
    return new HTTPTransport().post(`${this._tokenUrl}${chatId}`, {
      method: "POST",
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
