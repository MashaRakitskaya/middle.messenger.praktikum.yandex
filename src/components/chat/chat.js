import Handlebars from "handlebars";
import "./chat.scss";
import "../chatAvatar/chatAvatar.js";
import chat from "./chat.hbs";

Handlebars.registerPartial("chatPartial", chat);
