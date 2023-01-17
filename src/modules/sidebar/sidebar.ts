import "./sidebar.scss";
import sidebarTemplate from "./sidebar.hbs";
import Block from "../../utils/Block";
import InputSearch from "../../components/inputSearch/inputSearch";
import SettingsButtonSidebar from "../../components/settingsButtonSidebar/settingsButtonSidebar";
import ContextMenu from "../contextMenu/contextMenu";
import { router } from "../../..";
import {
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH,
  SIGNIN_PATH,
  popupIds,
} from "../../utils/constants";
import auth from "../../utils/api/auth";
import { showContextmenu, showPopup } from "../../utils/utils";
import ButtonImg from "../../components/addChatButtonSidebar/buttonImg";
import addChatImg from "../../images/addChat.svg";

const contextMenuSettingsData = [
  {
    itemText: "change profile data",
    events: {
      click: (): void => {
        router.go(PROFILE_SETTING_PATH);
      },
    },
  },
  {
    itemText: "change password",
    events: {
      click: (): void => {
        router.go(PASSWORD_SETTING_PATH);
      },
    },
  },
  {
    itemText: "exit",
    events: {
      click: (): void => {
        auth.logout().then((response: Response) => {
          if (response.status === 200) {
            router.go(SIGNIN_PATH);
          }
        });
      },
    },
  },
];

class Sidebar extends Block {
  constructor(props: Record<string, any> = {}) {
    const contextMenuSettingsOnSidebar = new ContextMenu({
      data: contextMenuSettingsData,
    });

    const settingsButton = new SettingsButtonSidebar({
      events: {
        contextmenu: (event: {
          preventDefault(): unknown;
          clientX: number;
          clientY: number;
        }) => {
          showContextmenu({ event, contextMenu: contextMenuSettingsOnSidebar });
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

    const addChatButtonSidebar = new ButtonImg({
      altText: "add chat button",
      imgButton: addChatImg,
      events: {
        click: () => {
          showPopup({ popupId: popupIds.idPopupAddChat });
        },
      },
    });

    const inputSearch = new InputSearch({ inputName: "search" });

    super("div", {
      ...props,
      inputSearch,
      settingsButton,
      addChatButtonSidebar,
      contextMenuSettingsOnSidebar,
    });
  }

  render() {
    return this.compile(sidebarTemplate, this.props);
  }
}

export default Sidebar;
