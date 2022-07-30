import HTTPTransport from "../HTTPTransport";

class User {
  private _baseUrl: string;
  private _passwordUrl: string;
  private _profileUrl: string;
  private _profileAvatarUrl: string;

  constructor() {
    this._baseUrl = "https://ya-praktikum.tech/api/v2";
    this._passwordUrl = `${this._baseUrl}/user/password`;
    this._profileUrl = `${this._baseUrl}/user/profile`;
    this._profileAvatarUrl = `${this._baseUrl}/user/profile/avatar`;
  }

  changePassword({ oldPassword, newPassword }) {
    return new HTTPTransport().put(this._passwordUrl, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        oldPassword,
        newPassword,
      },
    });
  }

  changeProfile({
    first_name,
    second_name,
    display_name,
    login,
    email,
    phone,
  }) {
    return new HTTPTransport().put(this._profileUrl, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        first_name,
        second_name,
        display_name,
        login,
        email,
        phone,
      },
    });
  }

  changeProfileAvatar({ file }) {
    const data = new FormData();
    data.append("avatar", file);
    return new HTTPTransport().put(this._profileAvatarUrl, {
      method: "PUT",
      data,
    });
  }
}

const user = new User();
export default user;
