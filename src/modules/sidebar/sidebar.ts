import "./sidebar.scss";
import sidebarTemplate from "./sidebar.hbs";
import Block from "../../utils/Block";
import InputSearch from "../../components/inputSearch/inputSearch";
import ChatMessage from "../../components/chatMessage/chatMessage";
import SettingsButtonSidebar from "../../components/settingsButtonSidebar/settingsButtonSidebar";
import ContextMenu from "../contextMenu/contextMenu";
import ContextMenuItem from "../../components/contextMenuItem/contextMenuItem";
import { router } from "../../..";
import {
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH,
  SIGNIN_PATH,
} from "../../utils/constants";
import auth from "../../utils/api/auth";

class Sidebar extends Block {
  constructor(props: Record<string, any> = {}) {
    const contextMenuItem1 = new ContextMenuItem({
      itemText: "change profile data",
      events: {
        click: () => {
          router.go(PROFILE_SETTING_PATH);
        },
      },
    });
    const contextMenuItem2 = new ContextMenuItem({
      itemText: "change password",
      events: {
        click: () => {
          router.go(PASSWORD_SETTING_PATH);
        },
      },
    });
    const contextMenuItem3 = new ContextMenuItem({
      itemText: "exit",
      events: {
        click: () => {
          auth.logout().then((response: Response) => {
            if (response.status === 200) {
              router.go(SIGNIN_PATH);
            }
          });
        },
      },
    });
    const contextMenuBlock = new ContextMenu({
      contextMenuItem1,
      contextMenuItem2,
      contextMenuItem3,
    });

    const settingsButton = new SettingsButtonSidebar({
      events: {
        contextmenu: (event) => {
          event.preventDefault();
          const contextMenu = document.querySelector(
            ".context-menu"
          ) as HTMLElement;
          const { clientX: mouseX, clientY: mouseY } = event;
          const { normalizedX, normalizedY } =
            contextMenuBlock.normalizePozition(
              mouseX,
              mouseY,
              document.getElementById("sidebar")
            );
          if (contextMenu) {
            contextMenu.classList.remove("visible");
            contextMenu.style.top = `${normalizedY}px`;
            contextMenu.style.left = `${normalizedX}px`;

            setTimeout(() => {
              contextMenu.classList.add("visible");
            });
          }
        },
        click: ({ target }) => {
          const contextMenu = document.querySelector(
            ".context-menu"
          ) as HTMLElement;
          if (contextMenu && target.offsetParent != contextMenu) {
            contextMenu.classList.remove("visible");
          }
        },
      },
    });

    const inputSearch = new InputSearch({ inputName: "search" });

    const chat1 = new ChatMessage({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chatName: "Elena List",
      chatMessage: "hat are extremely painful. Nor aga...",
      time: "12:00",
      numberMessages: "2344",
    });

    const chat2 = new ChatMessage({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      chatName: "Elena List",
      chatMessage: "hat are extremely painful. Nor aga...",
      time: "12:00",
      numberMessages: "2344",
    });

    const chat3 = new ChatMessage({
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
      settingsButton,
      chat1,
      chat2,
      chat3,
      contextMenuBlock,
    });
  }

  render() {
    return this.compile(sidebarTemplate, this.props);
  }
}

export default Sidebar;
