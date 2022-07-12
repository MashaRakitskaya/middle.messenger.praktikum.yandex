import Block from "../../common/Block";
import { BASE_URL, SIGNUP_PATH } from "../../utils/utils.ts";
import "./signin.scss";
import signinTemplate from "./signin.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";
import { inputsProperties } from "../../utils/utils";
import {
  getformData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";
import { inputsLabels, inputsNames } from "./constants";

class Signin extends Block {
  constructor(props = {}) {
    const { login, password } = inputsProperties;
    const pageTitle = new PageTitle({ pageTitle: "Login" });

    const inputLogin = new Input({
      ...login,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: login.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

    const inputPassword = new Input({
      ...password,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: password.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

    const formButton = new FormButton({
      buttonText: "Sign in",
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.querySelector("form") as HTMLFormElement;
          const inputs = formElement.querySelectorAll("input");
          const inputLoginTarget = inputs[0];
          const inputPasswordTarget = inputs[1];

          inputIsNotValid({
            input: validationMessageAndRegExp.login,
            target: inputLoginTarget,
            value: inputLoginTarget.value,
            message: validationMessageAndRegExp.login.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.password,
            target: inputPasswordTarget,
            value: inputPasswordTarget.value,
            message: validationMessageAndRegExp.password.message,
          });

          getformData("form");
        },
      },
    });

    super("div", {
      ...props,
      pageTitle,
      inputLogin,
      inputPassword,
      formButton,
      linkText: "Sign up",
      url: `${BASE_URL}${SIGNUP_PATH}`,
      ...inputsNames,
      ...inputsLabels,
    });
  }

  render() {
    return this.compile(signinTemplate, this.props);
  }
}

export default Signin;
