import Block from "../../utils/Block";
import profileImg from "../../images/profileimg.svg";
import profileSettingTemplate from "./profileSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import BackButton from "../../components/backButton/backButton";
import Input from "../../components/input/input";
import { inputsProperties } from "../../utils/constants";
import { inputsLabels, inputsNames } from "./constants";
import {
  getFormData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";
import { router } from "../../..";

class ProfileSetting extends Block {
  constructor(props: Record<string, any> = {}) {
    const { email, login, firstName, secondName, phone, displayName } =
      inputsProperties;
    const backButton = new BackButton({
      class: "button-back",
      events: {
        click: () => {
          router.back();
        },
      },
    });
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
            input: validationMessageAndRegExp.firstName,
            target: inputFirstNameTarget,
            value: inputFirstNameTarget.value,
            message: validationMessageAndRegExp.firstName.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.secondName,
            target: inputSecondNameTarget,
            value: inputSecondNameTarget.value,
            message: validationMessageAndRegExp.secondName.message,
          });

          inputIsNotValid({
            input: validationMessageAndRegExp.phone,
            target: inputPhoneTarget,
            value: inputPhoneTarget.value,
            message: validationMessageAndRegExp.phone.message,
          });

          getFormData("form");
        },
      },
    });

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

    const inputDisplayName = new Input({
      ...displayName,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const value = target.value;
          onBlur({
            target,
            value,
            name: displayName.name,
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

    super("div", {
      ...props,
      backButton,
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
