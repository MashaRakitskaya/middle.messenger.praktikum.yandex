import "./formButton.scss";
import formButtonTemplate from "./formButton.hbs";
import Block from "../../common/Block/Block";

class FormButton extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(formButtonTemplate, this.props);
  }
}

export default FormButton;
