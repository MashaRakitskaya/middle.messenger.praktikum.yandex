import Block from "../../utils/Block";
import chatTemplate from "./chat.hbs";
import "./chat.scss";
import Sidebar from "../../modules/sidebar/sidebar";
import ChatPage from "../../modules/chatPage/chatPage";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const sidebar = new Sidebar();
    const chatPage = new ChatPage();
    super("div", { ...props, isChatSelected: true, sidebar, chatPage });
  }

  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
