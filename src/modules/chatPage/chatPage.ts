import "./chatPage.scss";
import chatPageTemplate from "./chatPage.hbs";
import Block from "../../utils/Block";
import ChatName from "../../components/chatName/chatName";
import Avatar from "../../components/avatar/avatar";
import {
  getFormData,
  validationMessageAndRegExp,
} from "../../utils/validation";
import MessageSubmitButton from "../../components/messageFormSubmitButton/messageSubmitButton";
import MessageInput from "../../components/messageInput/messageInput";

class ChatPage extends Block {
  constructor({ addUsersButton, deleteUsersButton, deleteChatButton }) {
    const addErrorMessage = (message) => {
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

          const { message } = getFormData("message-form");
          const inputMessageValue = message;

          inputMessageValue === "" &&
            addErrorMessage(validationMessageAndRegExp.message.message);

          getFormData("message-form");
        },
      },
    });

    super("div", {
      messageContent:
        "quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore",
      urlImg:
        "https://images.unsplash.com/photo-1657013881676-f375a031a421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      messageSubmitButton,
      messageInput,
      addUsersButton,
      deleteUsersButton,
      deleteChatButton,
    });
  }

  render() {
    return this.compile(chatPageTemplate, this.props);
  }
}

export default ChatPage;
