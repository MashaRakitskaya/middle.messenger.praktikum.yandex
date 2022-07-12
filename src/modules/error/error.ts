import "./error.scss";
import errorTemplate from "./error.hbs";
import Block from "../../common/Block";

class Error extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error;
