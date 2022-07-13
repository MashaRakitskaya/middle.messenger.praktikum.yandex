import Block from "../../utils/Block";
import { BASE_URL, SIGNUP_PATH } from "../../utils/utils.ts";
import signinTemplate from "./signin.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";
import { inputsProperties } from "../../utils/constants";
import {
  getFormData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";
import { inputsLabels, inputsNames } from "./constants";

class Signin extends Block {
  constructor(props: Record<string, any> = {}) {
    const { login, password } = inputsProperties;
    const pageTitle = new PageTitle({ pageTitle: "Login" });

    const inputLogin = new Input({
      ...login,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: login.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
        },
      },
    });

    const inputPassword = new Input({
      ...password,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: password.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
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

          getFormData("form");
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
