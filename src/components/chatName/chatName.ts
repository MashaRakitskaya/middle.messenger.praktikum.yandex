import "./chatName.hbs";
import "./chatName.scss";
import chatName from "./chatName.hbs";

import Handlebars from "handlebars";

Handlebars.registerPartial("chatNamePartial", chatName);
