import "./chatPage.scss";
import chatPageTemplate from "./chatPage.hbs";
import Block from "../../common/Block";
import ChatName from "../../components/chatName/chatName";
import ChatAvatar from "../../components/chatAvatar/chatAvatar";
import {
  getformData,
  validationMessageAndRegExp,
} from "../../utils/validation";
import MessageSubmitButton from "../../components/messageFormSubmitButton/messageSubmitButton";
import MessageInput from "../../components/messageInput/messageInput";
class ChatPage extends Block {
  constructor(props: Record<string, any> = {}) {
    const addErrorMessage = (message) => {
      const error = document.querySelector(".form-error") as HTMLElement;
      error.style.visibility = "visible";
      error.textContent = message;
    };

    const removeErrorMessage = () => {
      const error = document.querySelector(".form-error") as HTMLElement;
      error.style.visibility = "hidden";
      error.textContent = "";
    };

    const chatAvatar = new ChatAvatar({
      urlImg:
        "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    });

    const chatName = new ChatName({ chatName: "Elena List" });

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

          const input = formElement.getElementsByClassName(
            "message-form__input"
          );
          const inputMessage = input[0] as HTMLInputElement;

          inputMessage.value === "" &&
            addErrorMessage(validationMessageAndRegExp.message.message);

          getformData("message-form");
        },
      },
    });

    super("div", {
      ...props,
      messageContent:
        "quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore",
      urlImg:
        "https://images.unsplash.com/photo-1657013881676-f375a031a421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      chatAvatar,
      chatName,
      messageSubmitButton,
      messageInput,
    });
  }

  render() {
    return this.compile(chatPageTemplate, this.props);
  }
}

export default ChatPage;
