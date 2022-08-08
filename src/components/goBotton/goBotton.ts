import "./goBotton.scss";
import goBottonTemplate from "./goBotton.hbs";
import Block from "../../utils/Block";

interface GoBottonProps {
  text: string;
  events: {
    click: () => void;
  };
}

class GoBotton extends Block {
  constructor(props: GoBottonProps) {
    super("div", props);
  }

  render() {
    return this.compile(goBottonTemplate, this.props);
  }
}

export default GoBotton;
