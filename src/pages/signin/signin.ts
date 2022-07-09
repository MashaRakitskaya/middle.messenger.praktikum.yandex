import Block from "../../common/Block/Block";
import { BASE_URL, SIGNUP_PATH } from "../../utils/utils.ts";
import "./signin.scss";
import signinTemplate from "./signin.hbs";
import Form from "../../modules/form/form";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";

const inputsArrey = [
  {
    input: {
      name: "login",
      label: "login",
      type: "text",
    },
  },
  {
    input: {
      name: "password",
      label: "password",
      type: "password",
    },
  },
];

class Signin extends Block {
  constructor(props = {}) {
    const pageTitle = new PageTitle({ pageTitle: "Login" });

    // const inputs = inputsArrey.map((item) => {
    //   return { input: new Input(item) };
    // });

    const inputs = inputsArrey.map((item) => new Input(item));

    const formButton = new FormButton({
      buttonText: "Sign in",
    });

    const form = new Form({
      isLink: true,
      linkText: "Sign up",
      url: `${BASE_URL}${SIGNUP_PATH}`,
      pageTitle,
      inputs,
      formButton,
    });
    super("div", { ...props, form });
  }

  render() {
    return this.compile(signinTemplate, this.props);
  }
}

export default Signin;
