import foundUsersSearchTemplate from "./foundUsers.hbs";
import Block from "../../utils/Block";
import store, { StoreEvents } from "../../utils/store";
import FoundUser from "../foundUser/foundUser";
import chats from "../../utils/api/chats";
import { hidePopup } from "../../utils/utils";
import { popupIds } from "../../utils/constants";
interface foundUsersSearchProps {
  id: string;
  login: string;
  second_name: string;
}

class FoundUsersSearch extends Block {
  constructor() {
    super("div");

    store.on(StoreEvents.Updated, () => {
      const { foundUsersSearch } = store.getState();

      const changedFoundUsersSearch: Block[] = [];

      foundUsersSearch?.forEach((element: foundUsersSearchProps) => {
        changedFoundUsersSearch.push(
          new FoundUser({
            id: element.id,
            login: element.login,
            second_name: element.second_name,
            events: {
              click: () => {
                const popup = document.getElementById(
                  popupIds.idPopupAddUsers
                ) as HTMLElement;

                const chatPage = document.getElementById(
                  "chat-page"
                ) as HTMLElement;

                const chatId = chatPage.getAttribute("data-id");
                chats
                  .addUsersToChat({ chatId: chatId, users: [`${element.id}`] })
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

export default FoundUsersSearch;
