import HTTPTransport from "../HTTPTransport";

class Auth {
  private _baseUrl: string;
  private _userUrl: string;
  private _signinUrl: string;
  private _signupUrl: string;
  private _logoutUrl: string;

  constructor() {
    this._baseUrl = "https://ya-praktikum.tech/api/v2";
    this._userUrl = `${this._baseUrl}/auth/user`;
    this._signupUrl = `${this._baseUrl}/auth/signup`;
    this._signinUrl = `${this._baseUrl}/auth/signin`;
    this._logoutUrl = `${this._baseUrl}/auth/logout`;
  }

  signup({ first_name, second_name, login, email, password, phone }) {
    return new HTTPTransport().post(this._signupUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        first_name,
        second_name,
        login,
        email,
        password,
        phone,
      },
    });
  }

  signin(login, password) {
    return new HTTPTransport().post(this._signinUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { login, password },
    });
  }

  getUser() {
    return new HTTPTransport().get(this._userUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {},
    });
  }

  logout() {
    return new HTTPTransport().post(this._logoutUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {},
    });
  }
}

const auth = new Auth();
export default auth;
