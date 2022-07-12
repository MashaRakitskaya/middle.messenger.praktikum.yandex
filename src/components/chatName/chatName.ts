import "./chatName.scss";
import chatNameTemplate from "./chatName.hbs";
import Block from "../../common/Block";

class ChatName extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(chatNameTemplate, this.props);
  }
}

export default ChatName;
