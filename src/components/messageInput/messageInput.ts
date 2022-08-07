import "./messageInput.scss";
import messageInputTemplate from "./messageInput.hbs";
import Block from "../../utils/Block";

interface MessageInputProps {
  events: {
    focus: () => void;
  };
}

class MessageInput extends Block {
  constructor(props: MessageInputProps) {
    super("div", props);
  }

  render() {
    return this.compile(messageInputTemplate, this.props);
  }
}

export default MessageInput;
