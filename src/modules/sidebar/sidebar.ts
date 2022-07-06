import Handlebars from "handlebars";
import "./sidebar.scss";
import "../../components/inputSearch/inputSearch.ts";
import "../../modules/chatsList/chatsList.ts";
import sidebar from "./sidebar.hbs";

Handlebars.registerPartial("sidebarPartial", sidebar);
