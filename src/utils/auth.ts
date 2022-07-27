import { router } from "../..";
import { MESSENGER_PATH, SIGNIN_PATH } from "./constants";
import HTTPTransport from "./HTTPTransport";
const BASE_URL = "https://ya-praktikum.tech/api/v2";
const SIGNUP_URL = `${BASE_URL}/auth/signup`;
const SIGNIN_URL = `${BASE_URL}/auth/signin`;

interface Response {
  status: number;
  response: string;
}

export const signup = ({
  first_name,
  second_name,
  login,
  email,
  password,
  phone,
}) => {
  new HTTPTransport()
    .post(SIGNUP_URL, {
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
    })
    .then((response: Response) => {
      if (response.status === 200) {
        router.go(SIGNIN_PATH);
      }
    });
};

export const signin = (login, password) => {
  new HTTPTransport()
    .post(SIGNIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { login, password },
    })
    .then((response: Response) => {
      if (response.status === 200) {
        router.go(MESSENGER_PATH);
      }
    });
};
