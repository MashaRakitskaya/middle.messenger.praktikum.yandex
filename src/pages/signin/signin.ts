import Block from "../../common/Block/Block";
import { BASE_URL, SIGNUP_PATH } from "../../utils/utils.ts";
import "./signin.scss";
import signinTemplate from "./signin.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";

class Signin extends Block {
  constructor(props = {}) {
    const pageTitle = new PageTitle({ pageTitle: "Login" });

    const inputLogin = new Input({
      name: "login",
      label: "login",
      type: "text",
    });

    const inputPassword = new Input({
      name: "password",
      label: "password",
      type: "password",
    });

    const formButton = new FormButton({
      buttonText: "Sign in",
    });

    super("div", {
      ...props,
      pageTitle,
      inputLogin,
      inputPassword,
      formButton,
      linkText: "Sign up",
      url: `${BASE_URL}${SIGNUP_PATH}`,
    });
  }

  render() {
    return this.compile(signinTemplate, this.props);
  }
}

export default Signin;
