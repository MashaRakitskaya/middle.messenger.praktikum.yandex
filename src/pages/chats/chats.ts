import "./chats.scss";
import "../../modules/sidebar/sidebar.ts";
import "../../modules/chatsList/chatsList.ts";
import chats from "./chats.hbs";
import "../../components/inputSearch/inputSearch.ts";
import "../../modules/chatPage/chatPage.ts";

const data = {
  isChatSelected: true,
  inputSearchContext: {
    inputName: "search",
  },
  chatPageContext: {
    urlImg:
      "https://images.unsplash.com/photo-1656244973145-e4bea1a9d6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    chatName: "Elena List",
    messages: [
      {
        isMessageText: true,
        messageClass: "message-item-left",
        messageContent:
          "quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore",
      },
      {
        isMessagePhoto: true,
        messageClass: "message-item-right",
        urlImg:
          "https://images.unsplash.com/photo-1657013881676-f375a031a421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        isMessageText: true,
        messageClass: "message-item-left",
        messageContent:
          "quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore",
      },
      {
        isMessageText: true,
        messageClass: "message-item-right",
        messageContent: " et expedita distinctio. Nam libero tempore",
      },
    ],
  },
  chats: [
    {
      chatContext: {
        chatAvatarContext: {
          urlImg:
            "https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        chatName: "Elena List",
        chatMessage: "hat are extremely painful. Nor aga...",
        time: "12:00",
        numberMessages: "2344",
      },
    },
    {
      chatContext: {
        chatAvatarContext: {
          urlImg:
            "https://images.unsplash.com/photo-1656931251449-07493b9f6caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        chatName: "Elena List",
        chatMessage: "hat are extremely painful. Nor aga...",
        time: "12:00",
        numberMessages: "2344",
      },
    },
  ],
};

export default chats(data);
