import "./chatMessage.scss";
import chatMessageTemplate from "./chatMessage.hbs";
import Block from "../../utils/Block";
import ChatAvatar from "../chatAvatar/chatAvatar";
import ChatName from "../chatName/chatName";
interface ChatProps {
  chatMessage: string;
  time: string;
  numberMessages: string;
  urlImg: string;
  chatName: string;
}

class ChatMessage extends Block {
  constructor(props: ChatProps) {
    const chatAvatar = new ChatAvatar({ urlImg: props.urlImg });
    const chatName = new ChatName({ chatName: props.chatName });
    super("div", { ...props, chatAvatar, chatName });
  }

  render() {
    return this.compile(chatMessageTemplate, this.props);
  }
}

export default ChatMessage;
