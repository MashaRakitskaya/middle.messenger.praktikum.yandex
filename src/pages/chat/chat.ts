import Block from "../../utils/Block";
import chatTemplate from "./chat.hbs";
import "./chat.scss";
import Sidebar from "../../modules/sidebar/sidebar";
import ChatPage from "../../modules/chatPage/chatPage";
import FormButton from "../../components/formButton/formButton";
import Popup from "../../modules/popup/popup";
import Input from "../../components/input/input";
import { formsIds, inputsProperties, popupIds } from "../../utils/constants";
import {
  getFormData,
  validationMessageAndRegExp,
} from "../../utils/validation";
import chats from "../../utils/api/chats";
import { addErrorMessage, hidePopup, showPopup } from "../../utils/utils";
import ChatOnSidebar from "../../components/chatOnSidebar/chatOnSidebar";
import defaulUserAvatar from "../../images/defaultUserAvatar.svg";
import ButtonImg from "../../components/addChatButtonSidebar/buttonImg";
import addUserImg from "../../images/addUser.svg";
import deleteUserImg from "../../images/deleteUser.svg";
import deleteChatImg from "../../images/deleteChat.svg";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const sidebar = new Sidebar();

    const addUsersButton = new ButtonImg({
      altText: "add user button",
      imgButton: addUserImg,
      events: {
        click: () => {
          showPopup({ popupId: popupIds.idPopupAddUsers });
        },
      },
    });

    const deleteUsersButton = new ButtonImg({
      altText: "delete user button",
      imgButton: deleteUserImg,
      events: {
        click: () => {
          console.log("hghg");
        },
      },
    });

    const deleteChatButton = new ButtonImg({
      altText: "delete chat button",
      imgButton: deleteChatImg,
      events: {
        click: () => {
          console.log("hghg");
        },
      },
    });

    const chatPage = new ChatPage({
      addUsersButton,
      deleteUsersButton,
      deleteChatButton,
    });

    chats.getChats().then((response) => {
      const data = JSON.parse(response.response);
      const chatList: any[] = [];

      data.forEach((element) => {
        chatList.push(
          new ChatOnSidebar({
            chatMessage: element.last_message
              ? element.last_message.content
              : null,
            time: element.last_message ? element.last_message.time : null,
            numberMessages: element.unread_count,
            urlImg: element.avatar
              ? `https://ya-praktikum.tech/api/v2/resources${element.avatar}`
              : defaulUserAvatar,
            chatName: element.title,
            events: {
              click: (event) => {
                chatPage.setProps({
                  avatarUrlImg: element.avatar
                    ? `https://ya-praktikum.tech/api/v2/resources${element.avatar}`
                    : defaulUserAvatar,
                  chatName: element.title,
                });
                this.setProps({ isChatSelected: true });
              },
            },
          })
        );
      });

      sidebar.setProps({
        chatList: chatList,
      });
    });

    const inputChatTitle = new Input({
      ...inputsProperties.chatTitle,
    });

    const inputUsersSearch = new Input({
      ...inputsProperties.users,
      placeholder: "Search...",
    });

    const popupAddChat = new Popup({
      formId: formsIds.idAddChat,
      popupId: popupIds.idPopupAddChat,
      input: inputChatTitle,
      labelInput: inputsProperties.chatTitle.label,
      nameInput: inputsProperties.chatTitle.name,
      pageTitleText: "Create a new chat",
      popupFormButton: new FormButton({
        buttonText: "Create",
        events: {
          click: (event) => {
            event.preventDefault();
            const popup = document.getElementById(
              popupIds.idPopupAddChat
            ) as HTMLElement;
            const { title } = getFormData(formsIds.idAddChat);
            console.log(title);

            const inputTitleValue = title;

            inputTitleValue === "" &&
              addErrorMessage(validationMessageAndRegExp.message.message);

            if (inputTitleValue !== "") {
              chats.createChat({ title }).then((response) => {
                if (response.status === 200) {
                  hidePopup(popup);
                }
              });
            }
          },
        },
      }),
    });

    const popupAddUsersToChat = new Popup({
      formId: formsIds.idAddUsers,
      popupId: popupIds.idPopupAddUsers,
      input: inputUsersSearch,
      labelInput: inputsProperties.users.label,
      nameInput: inputsProperties.users.name,
      pageTitleText: "Add users to the chat",
      popupFormButton: new FormButton({
        buttonText: "Add",
        events: {
          click: (event) => {
            event.preventDefault();
            const popup = document.getElementById(
              popupIds.idPopupAddUsers
            ) as HTMLElement;
            const { users } = getFormData(formsIds.idAddUsers);
            const inputUserSearchValue = users;
            inputUserSearchValue === "" &&
              addErrorMessage(validationMessageAndRegExp.message.message);
            console.log(users);

            if (inputUserSearchValue !== "") {
              chats
                .addUsersToChat({ users, chatId: "123" })
                .then((response) => {
                  if (response.status === 200) {
                    hidePopup(popup);
                  }
                });
            }
          },
        },
      }),
    });

    super("div", {
      ...props,
      isChatSelected: false,
      sidebar,
      chatPage,
      popupAddChat,
      popupAddUsersToChat,
    });
  }

  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
