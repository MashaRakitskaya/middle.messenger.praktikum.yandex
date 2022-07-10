import "./chat.scss";
import chatTemplate from "./chat.hbs";
import Block from "../../common/Block/Block";
import ChatAvatar from "../chatAvatar/chatAvatar";
import ChatName from "../chatName/chatName";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const chatAvatar = new ChatAvatar({ urlImg: props.urlImg });
    const chatName = new ChatName({ chatName: props.chatName });
    super("div", { ...props, chatAvatar, chatName });
  }

  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
