import Block from "../../common/Block/Block";
import "./passwordSetting.scss";
import passwordSettingTemplate from "./passwordSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";
import { inputsLabels, inputsNames } from "./constants";
import { inputsProperties } from "../../utils/utils";
import {
  getformData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";

class PasswordSetting extends Block {
  constructor(props = {}) {
    const { old_password, password, password_again } = inputsProperties;
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Change password",
    });
    const inputOldPassword = new Input({
      ...old_password,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: old_password.name,
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
      buttonText: "Save",
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.querySelector("form") as HTMLFormElement;
          const inputs = formElement.querySelectorAll("input");
          const inputOldPasswordTarget = inputs[0];
          const inputPasswordTarget = inputs[1];
          const inputPasswordAgainTarget = inputs[2];

          inputIsNotValid({
            input: validationMessageAndRegExp.old_password,
            target: inputOldPasswordTarget,
            value: inputOldPasswordTarget.value,
            message: validationMessageAndRegExp.old_password.message,
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

          getformData("form");
        },
      },
    });

    super("div", {
      ...props,
      back,
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
