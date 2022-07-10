import Block from "../../common/Block/Block";
import { BASE_URL, SIGNIN_PATH } from "../../utils/utils.ts";
import "./signup.scss";
import signupTemplate from "./signup.hbs";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";
class Signup extends Block {
  constructor(props = {}) {
    const pageTitle = new PageTitle({ pageTitle: "Sign up" });

    const inputEmail = new Input({
      name: "email",
      label: "email",
      type: "email",
    });

    const inputLogin = new Input({
      name: "login",
      label: "login",
      type: "text",
    });

    const inputFirstName = new Input({
      name: "first_name",
      label: "name",
      type: "text",
    });

    const inputSecondName = new Input({
      name: "second_name",
      label: "surename",
      type: "text",
    });

    const inputPhone = new Input({
      name: "phone",
      label: "phone number",
      type: "tel",
    });

    const inputPassword = new Input({
      name: "password",
      label: "password",
      type: "password",
    });

    const inputPasswordAgain = new Input({
      name: "password (again)",
      label: "password (again)",
      type: "password",
    });

    const formButton = new FormButton({
      buttonText: "Sign up",
    });

    super("div", {
      ...props,
      pageTitle,
      inputEmail,
      inputLogin,
      inputFirstName,
      inputSecondName,
      inputPhone,
      inputPassword,
      inputPasswordAgain,
      formButton,
      linkText: "Sign in",
      url: `${BASE_URL}${SIGNIN_PATH}`,
    });
  }

  render() {
    return this.compile(signupTemplate, this.props);
  }
}

export default Signup;
