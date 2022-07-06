import "./chatPage.scss";
import chatPage from "./chatPage.hbs";
import "../../components/chatName/chatName.js";
import Handlebars from "handlebars";
import "../../components/chatAvatar/chatAvatar.js";

Handlebars.registerPartial("chatPagePartial", chatPage);
