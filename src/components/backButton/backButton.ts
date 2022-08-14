import "./backButton.scss";
import * as backTemplate from "./backButton.hbs";
import Block from "../../utils/Block";

interface BackButtonProps {
  class: string;
  buttonText?: string;
  events: {
    click: () => void;
  };
}

class BackButton extends Block {
  constructor(props: BackButtonProps) {
    super("div", props);
  }

  render() {
    return this.compile(backTemplate, this.props);
  }
}

export default BackButton;
