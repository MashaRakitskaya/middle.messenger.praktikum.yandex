import Handlebars from "handlebars";
import "../../components/input/input.ts";
import form from "./form.hbs";
import "./form.scss";
import "../../components/pageTitle/pageTitle.ts";
import "../../components/formButton/formButton.ts";

Handlebars.registerPartial("formPartial", form);
