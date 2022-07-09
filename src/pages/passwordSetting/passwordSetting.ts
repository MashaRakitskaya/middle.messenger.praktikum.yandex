import Block from "../../common/Block/Block";
import "./passwordSetting.scss";
import passwordSettingTemplate from "./passwordSetting.hbs";
import Form from "../../modules/form/form";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Back from "../../components/back/back";
import Input from "../../components/input/input";

const inputsArrey = [
  {
    input: {
      name: "oldPassword",
      label: "old password",
      type: "password",
    },
  },
  {
    input: {
      name: "newPassword",
      label: "new password",
      type: "password",
    },
  },
  {
    input: {
      name: "newPassword (again)",
      label: "new password (again)",
      type: "password",
    },
  },
];

class PasswordSetting extends Block {
  constructor(props = {}) {
    const back = new Back();
    const pageTitle = new PageTitle({
      pageTitle: "Change password",
    });

    const inputs = inputsArrey.map((item) => {
      return { input: new Input(item) };
    });

    const formButton = new FormButton({
      buttonText: "Save",
    });

    const form = new Form({
      pageTitle,
      inputs,
      formButton,
    });
    super("div", { ...props, form, back });
  }

  render() {
    return this.compile(passwordSettingTemplate, this.props);
  }
}

export default PasswordSetting;
