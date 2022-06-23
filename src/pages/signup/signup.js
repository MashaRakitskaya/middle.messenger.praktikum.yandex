import "../../modules/form/form.js";
import signup from "./signup.hbs";
import "./signup.scss";
import { BASE_URL, SIGNIN_PATH } from "../../utils/utils.js";

const data = {
  pageTitleContext: {
    pageTitle: "Sign up",
  },
  formButtonContext: {
    buttonText: "Sign up",
  },
  isLink: true,
  linkText: "Sign in",
  url: `${BASE_URL}${SIGNIN_PATH}`,
  inputs: [
    {
      inputContext: {
        name: "email",
        label: "email",
        type: "email",
      },
    },
    {
      inputContext: {
        name: "login",
        label: "login",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "first_name",
        label: "name",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "second_name",
        label: "surename",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "phone",
        label: "phone number",
        type: "tel",
      },
    },
    {
      inputContext: {
        name: "password",
        label: "password",
        type: "password",
      },
    },
    {
      inputContext: {
        name: "password (again)",
        label: "password (again)",
        type: "password",
      },
    },
  ],
};
export default signup(data);
