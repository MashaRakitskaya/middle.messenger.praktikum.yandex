import "./sidebar.scss";
import sidebarTemplate from "./sidebar.hbs";
import Block from "../../common/Block";
import InputSearch from "../../components/inputSearch/inputSearch";
import Chat from "../../components/chat/chat";

class Sidebar extends Block {
  constructor(props = {}) {
    const inputSearch = new InputSearch({ inputName: "search" });

    const chat1 = new Chat({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chatName: "Elena List",
      chatMessage: "hat are extremely painful. Nor aga...",
      time: "12:00",
      numberMessages: "2344",
    });

    const chat2 = new Chat({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chatName: "Elena List",
      chatMessage: "hat are extremely painful. Nor aga...",
      time: "12:00",
      numberMessages: "2344",
    });

    const chat3 = new Chat({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chatName: "Elena List",
      chatMessage: "hat are extremely painful. Nor aga...",
      time: "12:00",
      numberMessages: "2344",
    });

    super("div", {
      ...props,
      inputSearch,
      chat1,
      chat2,
      chat3,
    });
  }

  render() {
    return this.compile(sidebarTemplate, this.props);
  }
}

export default Sidebar;
