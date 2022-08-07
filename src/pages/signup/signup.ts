import Block from "../../utils/Block";
import { BASE_URL, MESSENGER_PATH, SIGNIN_PATH } from "../../utils/constants";
import signupTemplate from "./signup.hbs";
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

class Signup extends Block {
  constructor(props: Record<string, any> = {}) {
    const {
      email,
      login,
      firstName,
      secondName,
      phone,
      password,
      passwordAgain,
    } = inputsProperties;

    const pageTitle = new PageTitle({ pageTitle: "Sign up" });

    const inputEmail = new Input({
      ...email,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: email.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
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

    const inputFirstName = new Input({
      ...firstName,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: firstName.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
        },
      },
    });

    const inputSecondName = new Input({
      ...secondName,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: secondName.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
        },
      },
    });

    const inputPhone = new Input({
      ...phone,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: phone.name,
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

    const inputPasswordAgain = new Input({
      ...passwordAgain,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: passwordAgain.name,
          });
        },
        focus: (event) => {
          const target = event.target as HTMLInputElement;
          onFocus({ target });
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

          const emailIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.email,
            target: inputEmailTarget,
            value: inputEmailTarget.value,
            message: validationMessageAndRegExp.email.message,
          });

          const loginIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.login,
            target: inputLoginTarget,
            value: inputLoginTarget.value,
            message: validationMessageAndRegExp.login.message,
          });

          const firstNameIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.firstName,
            target: inputFirstNameTarget,
            value: inputFirstNameTarget.value,
            message: validationMessageAndRegExp.firstName.message,
          });

          const secondNameIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.secondName,
            target: inputSecondNameTarget,
            value: inputSecondNameTarget.value,
            message: validationMessageAndRegExp.secondName.message,
          });

          const phoneIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.phone,
            target: inputPhoneTarget,
            value: inputPhoneTarget.value,
            message: validationMessageAndRegExp.phone.message,
          });

          const passwordIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.password,
            target: inputPasswordTarget,
            value: inputPasswordTarget.value,
            message: validationMessageAndRegExp.password.message,
          });

          const passwordAgainIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.passwordAgain,
            target: inputPasswordAgainTarget,
            value: inputPasswordAgainTarget.value,
            message: validationMessageAndRegExp.passwordAgain.message,
          });

          const { first_name, second_name, login, email, password, phone } =
            getFormData("form");

          if (
            emailIsNotValid &&
            loginIsNotValid &&
            firstNameIsNotValid &&
            secondNameIsNotValid &&
            phoneIsNotValid &&
            passwordIsNotValid &&
            passwordAgainIsNotValid
          ) {
            auth
              .signup({
                first_name,
                second_name,
                login,
                email,
                password,
                phone,
              })
              .then((response: Response) => {
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
      ...inputsNames,
      ...inputsLabels,
    });
  }

  render() {
    return this.compile(signupTemplate, this.props);
  }
}

export default Signup;
