import Handlebars from "handlebars";
import "../../components/input/input.js";
import form from "./form.hbs";
import "./form.scss";
import "../../components/pageTitle/pageTitle.js";
import "../../components/formButton/formButton.js";

Handlebars.registerPartial("formPartial", form);
