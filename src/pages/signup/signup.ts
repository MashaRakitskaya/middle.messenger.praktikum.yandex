import Block from "../../common/Block/Block";
import { BASE_URL, SIGNIN_PATH } from "../../utils/utils.ts";
import "./signup.scss";
import signupTemplate from "./signup.hbs";
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
class Signup extends Block {
  constructor(props = {}) {
    const {
      email,
      login,
      first_name,
      second_name,
      phone,
      password,
      password_again,
    } = inputsProperties;

    const pageTitle = new PageTitle({ pageTitle: "Sign up" });

    const inputEmail = new Input({
      ...email,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: email.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

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

    const inputFirstName = new Input({
      ...first_name,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: first_name.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

    const inputSecondName = new Input({
      ...second_name,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: second_name.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

    const inputPhone = new Input({
      ...phone,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: phone.name,
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

    const inputPasswordAgain = new Input({
      ...password_again,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: password_again.name,
          });
        },
        focus: (event) => {
          onFocus({ target: event.target });
        },
      },
    });

    const formButton = new FormButton({
      buttonText: "Sign up",
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.querySelector("form") as HTMLFormElement;
          const inputs = formElement.querySelectorAll("input");
          const inputEmailTarget = inputs[0];
          const inputLoginTarget = inputs[1];
          const inputFirstNameTarget = inputs[2];
          const inputSecondNameTarget = inputs[3];
          const inputPhoneTarget = inputs[4];
          const inputPasswordTarget = inputs[5];
          const inputPasswordAgainTarget = inputs[6];

          inputIsNotValid({
            input: validationMessageAndRegExp.email,
            target: inputEmailTarget,
            value: inputEmailTarget.value,
            message: validationMessageAndRegExp.email.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.login,
            target: inputLoginTarget,
            value: inputLoginTarget.value,
            message: validationMessageAndRegExp.login.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.first_name,
            target: inputFirstNameTarget,
            value: inputFirstNameTarget.value,
            message: validationMessageAndRegExp.first_name.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.second_name,
            target: inputSecondNameTarget,
            value: inputSecondNameTarget.value,
            message: validationMessageAndRegExp.second_name.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.phone,
            target: inputPhoneTarget,
            value: inputPhoneTarget.value,
            message: validationMessageAndRegExp.phone.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.password,
            target: inputPasswordTarget,
            value: inputPasswordTarget.value,
            message: validationMessageAndRegExp.password.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.password_again,
            target: inputPasswordAgainTarget,
            value: inputPasswordAgainTarget.value,
            message: validationMessageAndRegExp.password_again.message,
          });

          getformData();
        },
      },
    });

    super("div", {
      ...props,
      pageTitle,
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputPhone,
      inputPassword,
      inputPasswordAgain,
      formButton,
      linkText: "Sign in",
      url: `${BASE_URL}${SIGNIN_PATH}`,
      nameInputEmail: email.name,
      nameInputLogin: login.name,
      nameInputFirstName: first_name.name,
      nameInputSecondName: second_name.name,
      nameInputPhone: phone.name,
      nameInputPassword: password.name,
      nameInputPasswordAgain: password_again.name,
    });
  }

  render() {
    return this.compile(signupTemplate, this.props);
  }
}

export default Signup;
