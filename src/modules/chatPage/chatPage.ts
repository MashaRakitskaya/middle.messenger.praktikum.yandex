import "./chatPage.scss";
import chatPageTemplate from "./chatPage.hbs";
import Block from "../../utils/Block";
import {
  getFormData,
  validationMessageAndRegExp,
} from "../../utils/validation";
import MessageSubmitButton from "../../components/messageFormSubmitButton/messageSubmitButton";
import MessageInput from "../../components/messageInput/messageInput";
import store, { StoreEvents } from "../../utils/Store";
import Message from "../../components/message/message";
import ButtonImg from "../../components/addChatButtonSidebar/buttonImg";

class ChatPage extends Block {
  constructor({
    addUsersButton,
    deleteUsersButton,
    deleteChatButton,
  }: {
    addUsersButton: ButtonImg;
    deleteUsersButton: ButtonImg;
    deleteChatButton: ButtonImg;
  }) {
    const addErrorMessage = (message: string) => {
      const error = document.querySelector(".form-error") as HTMLElement;
      if (error) {
        error.style.visibility = "visible";
        error.textContent = message;
      }
    };

    const removeErrorMessage = () => {
      const error = document.querySelector(".form-error") as HTMLElement;
      if (error) {
        error.style.visibility = "hidden";
        error.textContent = "";
      }
    };

    const messageInput = new MessageInput({
      events: {
        focus: () => {
          removeErrorMessage();
        },
      },
    });

    const messageSubmitButton = new MessageSubmitButton({
      events: {
        click: (event) => {
          event.preventDefault();
          const formElement = document.getElementById(
            "message-form"
          ) as HTMLFormElement;
          const { socket } = store.getState();
          const { message } = getFormData("message-form");

          const inputMessageValue = message;

          inputMessageValue === "" &&
            addErrorMessage(validationMessageAndRegExp.message.message);

          if (inputMessageValue !== "") {
            socket.send({ content: inputMessageValue, type: "message" });
          }
          formElement.reset();
        },
      },
    });

    super("div", {
      messageSubmitButton,
      messageInput,
      addUsersButton,
      deleteUsersButton,
      deleteChatButton,
    });

    store.on(StoreEvents.Updated, () => {
      const { socket, messages, user } = store.getState();
      const changedMessages: any = [];
      socket?.message();
      const userId = user.id;
      const chatId = socket?.chatId;

      for (let key in messages) {
        if (key === chatId) {
          const currentMessages = messages[key];

          currentMessages?.forEach((element: any) => {
            changedMessages.push(
              new Message({
                class:
                  element?.user_id === userId
                    ? "message-item-right"
                    : "message-item-left ",
                messageText: element?.content,
              })
            );
          });
          this.setProps({ changedMessages: changedMessages });
        }
      }
    });
  }

  render() {
    return this.compile(chatPageTemplate, this.props);
  }
}

export default ChatPage;
