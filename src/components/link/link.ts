import "./link.scss";
import * as goBottonTemplate from "./link.hbs";
import Block from "../../utils/Block";

interface LinkProps {
  text: string;
  href: string;
  events: {
    click: (event: Event) => void;
  };
}

class Link extends Block {
  constructor(props: LinkProps) {
    super("div", props);
  }

  render() {
    return this.compile(goBottonTemplate, this.props);
  }
}

export default Link;
