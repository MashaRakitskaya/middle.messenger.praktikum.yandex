import Handlebars from "handlebars";
import "./sidebar.scss";
import "../../components/inputSearch/inputSearch.js";
import "../../modules/chatsList/chatsList.js";
import sidebar from'./sidebar.hbs';

Handlebars.registerPartial("sidebarPartial", sidebar);
