import Handlebars from "handlebars";
import "../../components/input/input.js";
import form from "./form.hbs";
import "./form.scss";

Handlebars.registerPartial("formPartial", form);
