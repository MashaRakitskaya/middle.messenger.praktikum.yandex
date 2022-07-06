import "../../modules/form/form.ts";
import { BASE_URL, SIGNUP_PATH } from "../../utils/utils.ts";
import signin from "./signin.hbs";
import "./signin.scss";

const data = {
  pageTitleContext: {
    pageTitle: "Login",
  },
  formButtonContext: {
    buttonText: "Sign in",
  },
  isLink: true,
  linkText: "Sign up",
  url: `${BASE_URL}${SIGNUP_PATH}`,
  inputs: [
    {
      inputContext: {
        name: "login",
        label: "login",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "password",
        label: "password",
        type: "password",
      },
    },
  ],
};
export default signin(data);
