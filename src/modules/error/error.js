import "./error.scss";
import error from "./error.hbs";
import Handlebars from "handlebars";

Handlebars.registerPartial("errorPartial", error);
