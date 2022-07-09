import "./back.scss";
import backTemplate from "./back.hbs";
import Block from "../../common/Block/Block";

class Back extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(backTemplate, this.props);
  }
}

export default Back;
