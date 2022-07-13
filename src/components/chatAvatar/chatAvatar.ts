import "./chatAvatar.scss";
import chatAvatarTemplate from "./chatAvatar.hbs";
import Block from "../../utils/Block";

interface ChatAvatarProps {
  urlImg: string;
}
class ChatAvatar extends Block {
  constructor(props: ChatAvatarProps) {
    super("div", props);
  }

  render() {
    return this.compile(chatAvatarTemplate, this.props);
  }
}

export default ChatAvatar;
