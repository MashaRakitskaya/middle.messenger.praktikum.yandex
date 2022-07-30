import Block from "../../utils/Block";
import passwordSettingTemplate from "./passwordSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import BackButton from "../../components/backButton/backButton";
import Input from "../../components/input/input";
import { inputsLabels, inputsNames } from "./constants";
import { inputsProperties } from "../../utils/constants";
import {
  getFormData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";
import { router } from "../../..";
import user from "../../utils/api/users";
import { isEqual } from "../../utils/utils";

class PasswordSetting extends Block {
  constructor(props: Record<string, any> = {}) {
    const { oldPassword, password, passwordAgain } = inputsProperties;
    const backButton = new BackButton({
      class: "button-back",
      events: {
        click: () => {
          router.back();
        },
      },
    });
    const pageTitle = new PageTitle({
      pageTitle: "Change password",
    });
    const inputOldPassword = new Input({
      ...oldPassword,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;

          onBlur({
            target,
            value,
            name: oldPassword.name,
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
      buttonText: "Save",
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.querySelector("form") as HTMLFormElement;
          const inputs = formElement.querySelectorAll("input");
          const inputOldPasswordTarget = inputs[0];
          const inputPasswordTarget = inputs[1];
          const inputPasswordAgainTarget = inputs[2];

          const oldPasswordIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.oldPassword,
            target: inputOldPasswordTarget,
            value: inputOldPasswordTarget.value,
            message: validationMessageAndRegExp.oldPassword.message,
          });

          const newPasswordIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.password,
            target: inputPasswordTarget,
            value: inputPasswordTarget.value,
            message: validationMessageAndRegExp.password.message,
          });

          const newpasswordAgainIsNotValid = inputIsNotValid({
            input: validationMessageAndRegExp.passwordAgain,
            target: inputPasswordAgainTarget,
            value: inputPasswordAgainTarget.value,
            message: validationMessageAndRegExp.passwordAgain.message,
          });

          const { old_password, password } = getFormData("form");

          if (
            oldPasswordIsNotValid &&
            newPasswordIsNotValid &&
            newpasswordAgainIsNotValid &&
            isEqual(inputPasswordTarget.value, inputPasswordAgainTarget.value)
          ) {
            user.changePassword({
              oldPassword: old_password,
              newPassword: password,
            });
          }
        },
      },
    });

    super("div", {
      ...props,
      backButton,
      pageTitle,
      inputOldPassword,
      inputPassword,
      inputPasswordAgain,
      formButton,
      ...inputsNames,
      ...inputsLabels,
    });
  }

  render() {
    return this.compile(passwordSettingTemplate, this.props);
  }
}

export default PasswordSetting;
