import Block from "../../common/Block/Block";
import profileImg from "../../images/profileimg.svg";
import "./profileSetting.scss";
import profileSettingTemplate from "./profileSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";
import { inputsProperties } from "../../utils/utils";
import { inputsLabels, inputsNames } from "./constants";
import {
  getformData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";

class ProfileSetting extends Block {
  constructor(props = {}) {
    const { email, login, first_name, second_name, phone, display_name } =
      inputsProperties;
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Сhange profile data",
    });
    const formButton = new FormButton({
      buttonText: "Save",
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.querySelector("form") as HTMLFormElement;
          const inputs = formElement.querySelectorAll("input");
          const inputEmailTarget = inputs[0];
          const inputLoginTarget = inputs[1];
          const inputFirstNameTarget = inputs[2];
          const inputSecondNameTarget = inputs[3];
          const inputPhoneTarget = inputs[5];

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

          getformData('form');
        },
      },
    });

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

    const inputDisplayName = new Input({
      ...display_name,
      events: {
        blur: (event) => {
          onBlur({
            target: event.target,
            value: event.target.value,
            input: display_name.name,
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

    super("div", {
      ...props,
      back,
      avatarUrlImg: profileImg,
      pageTitle,
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputDisplayName,
      inputPhone,
      formButton,
      ...inputsNames,
      ...inputsLabels,
    });
  }

  render() {
    return this.compile(profileSettingTemplate, this.props);
  }
}

export default ProfileSetting;
