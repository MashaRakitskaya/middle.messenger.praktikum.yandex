import "./chatAvatar.scss";
import chatAvatarTemplate from "./chatAvatar.hbs";
import Block from "../../common/Block/Block";

class ChatAvatar extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(chatAvatarTemplate, this.props);
  }
}

export default ChatAvatar;
