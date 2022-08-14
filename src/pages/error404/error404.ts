import Block from "../../utils/Block";
import * as error404Template from "./error404.hbs";
import Error from "../../modules/error/error";

class Error404 extends Block {
  constructor(props: Record<string, any> = {}) {
    const error = new Error({
      errorTitle: "404",
      errorText: "Page not found",
    });

    super("div", { ...props, error });
  }

  render() {
    return this.compile(error404Template, this.props);
  }
}

export default Error404;
