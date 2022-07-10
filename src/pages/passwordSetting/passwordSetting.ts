import Block from "../../common/Block/Block";
import "./passwordSetting.scss";
import passwordSettingTemplate from "./passwordSetting.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";

class PasswordSetting extends Block {
  constructor(props = {}) {
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Change password",
    });
    const inputOldPassword = new Input({
      name: "oldPassword",
      label: "old password",
      type: "password",
    });
    const inputPassword = new Input({
      name: "password",
      label: "password",
      type: "password",
    });

    const inputPasswordAgain = new Input({
      name: "password (again)",
      label: "password (again)",
      type: "password",
    });
    const formButton = new FormButton({
      buttonText: "Save",
    });

    super("div", {
      ...props,
      back,
      pageTitle,
      inputOldPassword,
      inputPassword,
      inputPasswordAgain,
      formButton,
    });
  }

  render() {
    return this.compile(passwordSettingTemplate, this.props);
  }
}

export default PasswordSetting;
