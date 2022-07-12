import Block from "../../common/Block";
import { BASE_URL, CHATS_PATH } from "../../utils/utils";
import error404Template from "./error404.hbs";
import Error from "../../modules/error/error";

class Error404 extends Block {
  constructor(props = {}) {
    const error = new Error({
      errorTitle: "404",
      errorText: "Page not found",
      url: `${BASE_URL}${CHATS_PATH}`,
    });

    super("div", { ...props, error });
  }

  render() {
    return this.compile(error404Template, this.props);
  }
}

export default Error404;
