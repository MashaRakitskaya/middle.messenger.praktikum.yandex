import "../../modules/form/form.js";
import "../../components/pageTitle/pageTitle.js";
import "../../components/formButton/formButton.js";
import signin from "./signin.hbs";
const data = {
  pageTitleContext: {
    pageTitle: "Login",
  },
  formButtonContext: {
    buttonText: "Sign in",
  },
  inputs: [
    {
      inputContext: {
        name: "login",
        label: "login",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "password",
        label: "password",
        type: "password",
      },
    },
  ],
};
export default signin(data);
