import "../../components/chat/chat.ts";
import "./chatsList.scss";
import chatsList from "./chatsList.hbs";

import Handlebars from "handlebars";

Handlebars.registerPartial("chatsListPartial", chatsList);
