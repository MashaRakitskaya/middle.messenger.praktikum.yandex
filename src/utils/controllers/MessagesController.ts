import store from "../Store";

interface MessageProps {
  content: string;
  time: string;
  user_id: number;
  type: string;
}
class MessagesController {
  addMessage(message: MessageProps) {
    const { messages = [] } = store.getState();
    messages.push(message);
    store.set("messages", messages);
  }
}

const messagesController = new MessagesController();
export default messagesController;
