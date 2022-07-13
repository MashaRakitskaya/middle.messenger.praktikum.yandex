import "./back.scss";
import backTemplate from "./back.hbs";
import Block from "../../utils/Block";

class Back extends Block {
  constructor(props: Record<string, any> = {}) {
    super("div", props);
  }

  render() {
    return this.compile(backTemplate, this.props);
  }
}

export default Back;
