import "./chatName.scss";
import chatNameTemplate from "./chatName.hbs";
import Block from "../../utils/Block";

interface ChatNameProps {
  chatName: string;
}

class ChatName extends Block {
  constructor(props: ChatNameProps) {
    super("div", props);
  }

  render() {
    return this.compile(chatNameTemplate, this.props);
  }
}

export default ChatName;
