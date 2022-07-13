import "./formButton.scss";
import formButtonTemplate from "./formButton.hbs";
import Block from "../../utils/Block";

interface FormButtonProps {
  buttonText: string;
  events: {
    click: (event: Event) => void;
  };
}

class FormButton extends Block {
  constructor(props: FormButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(formButtonTemplate, this.props);
  }
}

export default FormButton;
