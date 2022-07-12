import "./messageInput.scss";
import messageInputTemplate from "./messageInput.hbs";
import Block from "../../common/Block";

class MessageInput extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(messageInputTemplate, this.props);
  }
}

export default MessageInput;
