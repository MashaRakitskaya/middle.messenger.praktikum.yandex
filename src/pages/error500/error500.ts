import Block from "../../utils/Block";
import * as error500Template from "./error500.hbs";
import Error from "../../modules/error/error";

class Error500 extends Block {
  constructor(props: Record<string, any> = {}) {
    const error = new Error({
      errorTitle: "500",
      errorText: "We are already fixing",
    });

    super("div", { ...props, error });
  }

  render() {
    return this.compile(error500Template, this.props);
  }
}

export default Error500;
