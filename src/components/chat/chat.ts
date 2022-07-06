import Handlebars from "handlebars";
import "./chat.scss";
import "../chatAvatar/chatAvatar.ts";
import "../chatName/chatName.ts";
import chat from "./chat.hbs";

Handlebars.registerPartial("chatPartial", chat);
