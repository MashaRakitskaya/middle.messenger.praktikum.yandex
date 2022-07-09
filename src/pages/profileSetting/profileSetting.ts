import Block from "../../common/Block/Block";
import profileImg from "../../images/profileimg.svg";
import "./profileSetting.scss";
import profileSettingTemplate from "./profileSetting.hbs";
import Form from "../../modules/form/form";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";

const inputsArrey = [
  {
    input: {
      name: "email",
      label: "email",
      type: "email",
    },
  },
  {
    input: {
      name: "login",
      label: "login",
      type: "text",
    },
  },
  {
    input: {
      name: "first_name",
      label: "name",
      type: "text",
    },
  },
  {
    input: {
      name: "second_name",
      label: "surename",
      type: "text",
    },
  },
  {
    input: {
      name: "display_name",
      label: "chat name",
      type: "text",
    },
  },
  {
    input: {
      name: "phone",
      label: "phone number",
      type: "tel",
    },
  },
];

class ProfileSetting extends Block {
  constructor(props = {}) {
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Сhange profile data",
    });

    const inputs = inputsArrey.map((item) => {
      return { input: new Input(item) };
    });

    const formButton = new FormButton({
      buttonText: "Save",
    });

    const form = new Form({
      isProfileImg: true,
      urlImg: profileImg,
      pageTitle,
      inputs,
      formButton,
    });
    super("div", { ...props, form, back });
  }

  render() {
    return this.compile(profileSettingTemplate, this.props);
  }
}

export default ProfileSetting;
