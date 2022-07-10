import Block from "../../common/Block/Block";
import profileImg from "../../images/profileimg.svg";
import "./profileSetting.scss";
import profileSettingTemplate from "./profileSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";

class ProfileSetting extends Block {
  constructor(props = {}) {
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Сhange profile data",
    });
    const formButton = new FormButton({ buttonText: "Save" });

    const inputEmail = new Input({
      name: "email",
      label: "email",
      type: "email",
    });

    const inputLogin = new Input({
      name: "login",
      label: "login",
      type: "text",
    });

    const inputFirstName = new Input({
      name: "first_name",
      label: "name",
      type: "text",
    });

    const inputSecondName = new Input({
      name: "second_name",
      label: "surename",
      type: "text",
    });

    const inputDisplayName = new Input({
      name: "display_name",
      label: "chat name",
      type: "text",
    });

    const inputPhone = new Input({
      name: "phone",
      label: "phone number",
      type: "tel",
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
    });
  }

  render() {
    return this.compile(profileSettingTemplate, this.props);
  }
}

export default ProfileSetting;
