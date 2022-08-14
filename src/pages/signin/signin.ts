import Block from "../../utils/Block";
import { MESSENGER_PATH, SIGNUP_PATH } from "../../utils/constants";
import * as signinTemplate from "./signin.hbs";
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
import auth from "../../utils/api/auth";
import { router } from "../../..";
import Link from "../../components/link/link";

class Signin extends Block {
  constructor(props: Record<string, any> = {}) {
    const { login, password } = inputsProperties;
    const pageTitle = new PageTitle({ pageTitle: "Login" });
    const link = new Link({
      text: "Sign up",
      href: `${SIGNUP_PATH}`,
      events: {
        click: (event) => {
          event.preventDefault();
          router.go(SIGNUP_PATH);
        },
      },
    });

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

          const loginIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.login,
            target: inputLoginTarget,
            value: inputLoginTarget.value,
            message: validationMessageAndRegExp.login.message,
          });

          const passwordIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.password,
            target: inputPasswordTarget,
            value: inputPasswordTarget.value,
            message: validationMessageAndRegExp.password.message,
          });

          const { login, password } = getFormData("form");

          if (loginIsNotValid && passwordIsNotValid) {
            auth.signin(login, password).then((response: Response) => {
              if (response.status === 200) {
                router.go(MESSENGER_PATH);
              }
            });
          }
        },
      },
    });

    super("div", {
      ...props,
      pageTitle,
      inputLogin,
      inputPassword,
      formButton,
      link,
      ...inputsNames,
      ...inputsLabels,
    });
  }

  render() {
    return this.compile(signinTemplate, this.props);
  }
}

export default Signin;
