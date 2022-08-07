import "./error.scss";
import errorTemplate from "./error.hbs";
import Block from "../../utils/Block";
import { router } from "../../..";
import { MESSENGER_PATH } from "../../utils/constants";
import BackButton from "../../components/backButton/backButton";

interface ErrorProps {
  errorTitle: string;
  errorText: string;
}

class Error extends Block {
  constructor(props: ErrorProps) {
    const backButton = new BackButton({
      class: "error-page-back",
      buttonText: "Back to chats",
      events: {
        click: () => {
          router.go(MESSENGER_PATH);
        },
      },
    });
    super("div", { ...props, backButton });
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error;
