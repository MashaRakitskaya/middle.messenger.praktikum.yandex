import "./chatOnSidebar.scss";
import chatOnSidebarTemplate from "./chatOnSidebar.hbs";
import Block from "../../utils/Block";

interface ChatProps {
  chatMessage?: string;
  time?: string;
  numberMessages?: string;
  urlImg: string;
  chatName: string;
  events?: {
    click: (event: Event) => void;
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
