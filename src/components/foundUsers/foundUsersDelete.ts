import foundUsersSearchTemplate from "./foundUsers.hbs";
import Block from "../../utils/Block";
import store, { StoreEvents } from "../../utils/Store";
import FoundUser from "../foundUser/foundUser";
import chats from "../../utils/api/chats";
import { hidePopup } from "../../utils/utils";
import { popupIds } from "../../utils/constants";

class FoundUsersDelete extends Block {
  constructor() {
    super("div");

    store.on(StoreEvents.Updated, () => {
      const { foundUsersDelete } = store.getState();

      const changedFoundUsersSearch: Block[] = [];

      foundUsersDelete?.forEach((element: any) => {
        changedFoundUsersSearch.push(
          new FoundUser({
            id: element.id,
            login: element.login,
            second_name: element.second_name,
            events: {
              click: () => {
                const popup = document.getElementById(
                  popupIds.idPopupDeleteUsers
                ) as HTMLElement;

                const chatPage = document.getElementById(
                  "chat-page"
                ) as HTMLElement;

                const chatId = chatPage.getAttribute("data-id");
                chats
                  .deleteUsersFromChat({ users: [element.id], chatId: chatId })
                  .then((response) => {
                    if (response.status === 200) {
                      hidePopup(popup);
                    }
                  });
              },
            },
          })
        );
      });

      this.setProps({ changedFoundUsersSearch: changedFoundUsersSearch });
    });
  }

  render() {
    return this.compile(foundUsersSearchTemplate, this.props);
  }
}

export default FoundUsersDelete;
