import "./message.scss";
import * as messageTemplate from "./message.hbs";
import Block from "../../utils/Block";

interface MessageProps {
  class?: string;
  message?: string;
}

class Message extends Block {
  constructor(props: MessageProps) {
    super("div", props);
  }

  render() {
    return this.compile(messageTemplate, this.props);
  }
}

export default Message;
