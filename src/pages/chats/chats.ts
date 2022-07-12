import Block from "../../common/Block";
import chatsTemplate from "./chats.hbs";
import "./chats.scss";
import Sidebar from "../../modules/sidebar/sidebar";
import ChatPage from "../../modules/chatPage/chatPage";

class Chats extends Block {
  constructor(props = {}) {
    const sidebar = new Sidebar();
    const chatPage = new ChatPage();
    super("div", { ...props, isChatSelected: true, sidebar, chatPage });
  }

  render() {
    return this.compile(chatsTemplate, this.props);
  }
}

export default Chats;
