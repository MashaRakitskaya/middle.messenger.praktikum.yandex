import "./chatMessage.scss";
import chatMessageTemplate from "./chatMessage.hbs";
import Block from "../../utils/Block";
import Avatar from "../avatar/avatar";
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
    const avatar = new Avatar({ urlImg: props.urlImg, class: "chat-img" });
    const chatName = new ChatName({ chatName: props.chatName });
    super("div", { ...props, avatar, chatName });
  }

  render() {
    return this.compile(chatMessageTemplate, this.props);
  }
}

export default ChatMessage;
