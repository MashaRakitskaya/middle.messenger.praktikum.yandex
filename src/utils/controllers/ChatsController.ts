import chats from "../api/chats";
import store from "../Store";
import { hidePopup } from "../utils";

class ChatsController {
  getChats() {
    return chats.getChats().then((response: { response: string }) => {
      store.set("chats", JSON.parse(response.response));
    });
  }

  createChat({ title, popup }: { title: string; popup: HTMLElement }) {
    chats.createChat({ title }).then((response: { status: number }) => {
      this.getChats();
      if (response.status === 200) {
        hidePopup(popup);
      }
    });
  }

  deleteChat({ chatId }: { chatId: string }) {
    chats.deleteChat({ chatId }).then(() => {
      this.getChats();
    });
  }
}

const chatsController = new ChatsController();
export default chatsController;
