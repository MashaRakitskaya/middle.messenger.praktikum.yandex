import Block from "../../utils/Block";
import { BASE_URL, CHATS_PATH } from "../../utils/constants";
import error500Template from "./error500.hbs";
import Error from "../../modules/error/error";

class Error500 extends Block {
  constructor(props: Record<string, any> = {}) {
    const error = new Error({
      errorTitle: "500",
      errorText: "We are already fixing",
      url: `${BASE_URL}${CHATS_PATH}`,
    });

    super("div", { ...props, error });
  }

  render() {
    return this.compile(error500Template, this.props);
  }
}

export default Error500;
