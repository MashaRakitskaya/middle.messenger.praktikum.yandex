import Block from "../../utils/Block";
import * as chatTemplate from "./chat.hbs";
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
import chatsApi from "../../utils/api/chats";
import { showPopup } from "../../utils/utils";
import ChatOnSidebar from "../../components/chatOnSidebar/chatOnSidebar";
import defaulUserAvatar from "../../images/defaultUserAvatar.svg";
import ButtonImg from "../../components/addChatButtonSidebar/buttonImg";
import addUserImg from "../../images/addUser.svg";
import deleteUserImg from "../../images/deleteUser.svg";
import deleteChatImg from "../../images/deleteChat.svg";
import authController from "../../utils/controllers/AuthController";
import chatsController from "../../utils/controllers/ChatsController";
import store, { StoreEvents } from "../../utils/Store";
import userContraller from "../../utils/controllers/UserContraller";
import FoundUsersSearch from "../../components/foundUsers/foundUsersSearch";
import Socket from "../../utils/Socket";
import chats from "../../utils/api/chats";
import FoundUsersDelete from "../../components/foundUsers/foundUsersDelete";

class Chat extends Block {
  constructor(props: Record<string, any> = {}) {
    const addErrorMessage = (message: string) => {
      const error = document.getElementById("error") as HTMLElement;

      if (error) {
        error.style.visibility = "visible";
        error.textContent = message;
      }
    };

    const removeErrorMessage = () => {
      const error = document.getElementById("error") as HTMLElement;
      if (error) {
        error.style.visibility = "hidden";
        error.textContent = "";
      }
    };

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
          const chatPage = document.getElementById("chat-page") as HTMLElement;

          const chatId = chatPage.getAttribute("data-id");
          const { user } = store.getState();
          const userId = user.id;
          if (chatId) {
            chats
              .getChatUsers({ chatId: chatId })
              .then((response: { response: string }) => {
                const foundUsers = JSON.parse(response.response);
                const withoutСurrentUser = foundUsers.filter(
                  (user: any) => user.id !== userId
                );
                store.set("foundUsersDelete", withoutСurrentUser);
              });
          }

          showPopup({ popupId: popupIds.idPopupDeleteUsers });
        },
      },
    });

    const deleteChatButton = new ButtonImg({
      altText: "delete chat button",
      imgButton: deleteChatImg,
      events: {
        click: () => {
          const chatPage = document.getElementById("chat-page") as HTMLElement;
          const chatId = chatPage.getAttribute("data-id");
          const result = window.confirm("Do you want to delete the chat?");
          if (result) {
            if (chatId) {
              chatsController.deleteChat({ chatId: chatId });
              this.setProps({ isChatSelected: false });
            }
          } else {
            return;
          }
        },
      },
    });

    const chatPage = new ChatPage({
      addUsersButton,
      deleteUsersButton,
      deleteChatButton,
    });

    const inputChatTitle = new Input({
      ...inputsProperties.chatTitle,
      events: {
        focus: () => {
          removeErrorMessage();
        },
      },
    });

    const inputUsersSearch = new Input({
      ...inputsProperties.users,
      placeholder: "Search...",
      events: {
        focus: () => {
          removeErrorMessage();
        },
      },
    });

    const popupAddChat = new Popup({
      formId: formsIds.idAddChat,
      popupId: popupIds.idPopupAddChat,
      input: inputChatTitle,
      labelInput: inputsProperties.chatTitle.label,
      nameInput: inputsProperties.chatTitle.name,
      pageTitleText: "Create a new chat",
      popupFormButtonAdd: new FormButton({
        buttonText: "Create",
        events: {
          click: (event) => {
            event.preventDefault();
            const popup = document.getElementById(
              popupIds.idPopupAddChat
            ) as HTMLElement;
            const { title } = getFormData(formsIds.idAddChat);

            const inputTitleValue = title;

            inputTitleValue === "" &&
              addErrorMessage(validationMessageAndRegExp.message.message);

            if (inputTitleValue !== "") {
              chatsController.createChat({ title, popup });
            }
          },
        },
      }),
    });

    const foundUsersSearch = new FoundUsersSearch();
    const foundUsersDelete = new FoundUsersDelete();

    const popupAddUsersToChat = new Popup({
      isPopupAddUsersToChat: true,
      formId: formsIds.idAddUsers,
      popupId: popupIds.idPopupAddUsers,
      input: inputUsersSearch,
      labelInput: inputsProperties.users.label,
      nameInput: inputsProperties.users.name,
      pageTitleText: "Add users to the chat",
      setFoundUsers: true,
      foundUsers: foundUsersSearch,
      popupFormButtonSearch: new FormButton({
        buttonValue: "search users",
        buttonText: "Search Users",
        events: {
          click: (event) => {
            event.preventDefault();

            const { users } = getFormData(formsIds.idAddUsers);
            const inputUserSearchValue = users;

            if (inputUserSearchValue !== "") {
              userContraller.searchUserByLogin({ login: inputUserSearchValue });
            }
          },
        },
      }),
    });

    const popupDeleteUsersFromChat = new Popup({
      formId: formsIds.idDeleteUsers,
      popupId: popupIds.idPopupDeleteUsers,
      labelInput: inputsProperties.users.label,
      nameInput: inputsProperties.users.name,
      pageTitleText: "Delete users from the chat",
      setFoundUsers: true,
      foundUsers: foundUsersDelete,
    });

    super("div", {
      ...props,
      sidebar,
      chatPage,
      popupAddChat,
      popupAddUsersToChat,
      popupDeleteUsersFromChat,
    });

    authController.getUser();
    chatsController.getChats();

    store.on(StoreEvents.Updated, () => {
      const { chats } = store.getState();

      const chatList: any[] = [];

      chats?.forEach(
        (element: {
          id: string;
          last_message: {
            content: string;
            time: Date;
          };
          unread_count: string;
          avatar: any;
          title: string;
        }) => {
          chatList.push(
            new ChatOnSidebar({
              id: element.id,
              chatMessage: element.last_message
                ? element.last_message.content
                : null,
              time: element.last_message
                ? `${new Date(
                    element.last_message.time
                  ).toLocaleDateString()} ${new Date(
                    element.last_message.time
                  ).getHours()}:${new Date(
                    element.last_message.time
                  ).getMinutes()}`
                : null,
              numberMessages: element.unread_count,
              urlImg: element.avatar
                ? `https://ya-praktikum.tech/api/v2/resources${element.avatar}`
                : defaulUserAvatar,
              chatName: element.title,
              events: {
                click: () => {
                  chatPage.setProps({
                    avatarUrlImg: element.avatar
                      ? `https://ya-praktikum.tech/api/v2/resources${element.avatar}`
                      : defaulUserAvatar,
                    chatName: element.title,
                    chatId: element.id,
                  });
                  this.setProps({ isChatSelected: true });
                  const chatPageElement = document.getElementById(
                    "chat-page"
                  ) as HTMLElement;

                  const chatId = chatPageElement.getAttribute("data-id");
                  if (chatId) {
                    chatsApi
                      .getChatToken({ chatId })
                      .then((response: { response: string }) => {
                        const { token } = JSON.parse(response.response);
                        const { user } = store.getState();
                        const userId = user.id;
                        if (chatId && token && userId) {
                          const socket = new Socket({
                            chatId: chatId,
                            token: token,
                            userId: userId,
                          });
                          socket.open();
                          store.set("socket", socket);
                        }
                      });
                  }
                },
              },
            })
          );
        }
      );

      sidebar.setProps({
        chatList: chatList,
      });
    });
  }

  render() {
    return this.compile(chatTemplate, this.props);
  }
}

export default Chat;
