import "./messageSubmitButton.scss";
import messageSubmitButtonTemplate from "./messageSubmitButton.hbs";
import Block from "../../utils/Block";

interface MessageSubmitButtonProps {
  events: {
    click: (event: Event) => void;
  };
}

class MessageSubmitButton extends Block {
  constructor(props: MessageSubmitButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(messageSubmitButtonTemplate, this.props);
  }
}

export default MessageSubmitButton;
