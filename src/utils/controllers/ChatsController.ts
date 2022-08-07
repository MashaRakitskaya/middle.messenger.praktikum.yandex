import chats from "../api/chats";
import store from "../Store";
import { hidePopup } from "../utils";

class ChatsController {
  getChats() {
    return chats.getChats().then((response) => {
      store.set("chats", JSON.parse(response.response));
    });
  }

  createChat({ title, popup }) {
    chats.createChat({ title }).then((response) => {
      this.getChats();
      if (response.status === 200) {
        hidePopup(popup);
      }
    });
  }

  deleteChat({ chatId }) {
    chats.deleteChat({ chatId }).then(() => {
      this.getChats();
    });
  }
}

const chatsController = new ChatsController();
export default chatsController;
