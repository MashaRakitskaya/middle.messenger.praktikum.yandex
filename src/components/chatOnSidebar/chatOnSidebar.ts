import "./chatOnSidebar.scss";
import chatOnSidebarTemplate from "./chatOnSidebar.hbs";
import Block from "../../utils/Block";

interface ChatProps {
  id: string;
  chatMessage?: string;
  time?: string | null;
  numberMessages?: string;
  urlImg: string;
  chatName: string;
  events?: {
    click: () => void;
  };
}

class ChatOnSidebar extends Block {
  constructor(props: ChatProps) {
    super("div", { ...props });
  }

  render() {
    return this.compile(chatOnSidebarTemplate, this.props);
  }
}

export default ChatOnSidebar;
