import "./input.scss";
import inputTemplate from "./input.hbs";
import Block from "../../common/Block";

class Input extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(inputTemplate, this.props);
  }
}

export default Input;
