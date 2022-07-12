import "./messageSubmitButton.scss";
import messageSubmitButtonTemplate from "./messageSubmitButton.hbs";
import Block from "../../common/Block/Block";

class MessageSubmitButton extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(messageSubmitButtonTemplate, this.props);
  }
}

export default MessageSubmitButton;
