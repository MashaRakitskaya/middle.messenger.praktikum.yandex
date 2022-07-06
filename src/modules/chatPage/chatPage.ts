import "./chatPage.scss";
import chatPage from "./chatPage.hbs";
import "../../components/chatName/chatName.ts";
import Handlebars from "handlebars";
import "../../components/chatAvatar/chatAvatar.ts";

Handlebars.registerPartial("chatPagePartial", chatPage);
