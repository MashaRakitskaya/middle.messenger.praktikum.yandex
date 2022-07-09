import Block from "../../common/Block/Block";
import { BASE_URL, SIGNIN_PATH } from "../../utils/utils.ts";
import "./signup.scss";
import signupTemplate from "./signup.hbs";
import Form from "../../modules/form/form";
import PageTitle from "../../components/pageTitle/pageTitle";
import FormButton from "../../components/formButton/formButton";
import Input from "../../components/input/input";

const inputsArrey = [
  {
    input: {
      name: "email",
      label: "email",
      type: "email",
    },
  },
  {
    input: {
      name: "login",
      label: "login",
      type: "text",
    },
  },
  {
    input: {
      name: "first_name",
      label: "name",
      type: "text",
    },
  },
  {
    input: {
      name: "second_name",
      label: "surename",
      type: "text",
    },
  },
  {
    input: {
      name: "phone",
      label: "phone number",
      type: "tel",
    },
  },
  {
    input: {
      name: "password",
      label: "password",
      type: "password",
    },
  },
  {
    input: {
      name: "password (again)",
      label: "password (again)",
      type: "password",
    },
  },
];

class Signup extends Block {
  constructor(props = {}) {
    const pageTitle = new PageTitle({ pageTitle: "Sign up" });

    const inputs = inputsArrey.map((item) => {
      return { input: new Input(item) };
    });

    const formButton = new FormButton({
      buttonText: "Sign up",
    });

    const form = new Form({
      isLink: true,
      linkText: "Sign in",
      url: `${BASE_URL}${SIGNIN_PATH}`,
      pageTitle,
      inputs,
      formButton,
    });
    super("div", { ...props, form });
  }

  render() {
    return this.compile(signupTemplate, this.props);
  }
}

export default Signup;
