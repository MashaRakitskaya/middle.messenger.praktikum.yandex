import "./chat.scss";
import chatTemplate from "./chat.hbs";
// import ChatName from "../chatName/chatName";
// import ChatAvatar from "../chatAvatar/chatAvatar";
import Block from "../../common/Block/Block";

class Chat extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
