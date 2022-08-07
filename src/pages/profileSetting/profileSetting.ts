import Block from "../../utils/Block";
import "./profileSetting.scss";
import profileSettingTemplate from "./profileSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import BackButton from "../../components/backButton/backButton";
import Input from "../../components/input/input";
import { formsIds, inputsProperties, popupIds } from "../../utils/constants";
import { inputsLabels, inputsNames } from "./constants";
import {
  getFormData,
  inputIsNotValid,
  onBlur,
  onFocus,
  validationMessageAndRegExp,
} from "../../utils/validation";
import { router } from "../../..";
import auth from "../../utils/api/auth";
import user from "../../utils/api/users";
import EditAvatar from "../../components/editAvatar/editAvatar";
import Popup from "../../modules/popup/popup";
import { hidePopup, showPopup } from "../../utils/utils";

class ProfileSetting extends Block {
  constructor(props: Record<string, any> = {}) {
    const { email, login, firstName, secondName, phone, displayName, avatar } =
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

    const inputAvatar = new Input({
      ...avatar,
    });

    const popupAddAvatar = new Popup({
      formId: formsIds.idAddAvatar,
      popupId: popupIds.idPopupAddAvatar,
      nameInput: inputsNames.nameInputAvatar,
      labelInput: inputsLabels.labelInputAvatar,
      input: inputAvatar,
      pageTitleText: "Upload a file",
      popupFormButtonSave: new FormButton({
        buttonText: "Save",
        events: {
          click: (event) => {
            event.preventDefault();
            const { avatar } = getFormData(formsIds.idAddAvatar);
            const avatarImage = document.getElementById(
              "avatar"
            ) as HTMLImageElement;
            const popup = document.getElementById(
              popupIds.idPopupAddAvatar
            ) as HTMLElement;
            user.changeProfileAvatar({ file: avatar }).then((response) => {
              if (response.status === 200) {
                avatarImage.src = URL.createObjectURL(avatar);
                hidePopup(popup);
              }
            });
          },
        },
      }),
    });

    const editAvatar = new EditAvatar({
      events: {
        click: () => {
          showPopup({ popupId: popupIds.idPopupAddAvatar });
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
          const inputEmailTarget = inputs[0];
          const inputLoginTarget = inputs[1];
          const inputFirstNameTarget = inputs[2];
          const inputSecondNameTarget = inputs[3];
          const inputPhoneTarget = inputs[5];

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

          const { display_name, email, first_name, login, phone, second_name } =
            getFormData("form");

          if (
            emailIsNotValid &&
            loginIsNotValid &&
            firstNameIsNotValid &&
            secondNameIsNotValid &&
            phoneIsNotValid
          ) {
            user.changeProfile({
              display_name,
              email,
              first_name,
              login,
              phone,
              second_name,
            });
          }
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

    auth.getUser().then((response) => {
      const data = JSON.parse(response.response);
      const {
        avatar,
        display_name,
        email,
        first_name,
        login,
        phone,
        second_name,
      } = data;

      inputEmail.setProps({ value: email });
      inputLogin.setProps({ value: login });
      inputFirstName.setProps({ value: first_name });
      inputSecondName.setProps({ value: second_name });
      if (display_name) {
        inputDisplayName.setProps({ value: display_name });
      }
      inputPhone.setProps({ value: phone });
    });

    super("div", {
      ...props,
      backButton,
      popupAddAvatar,
      editAvatar,
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
