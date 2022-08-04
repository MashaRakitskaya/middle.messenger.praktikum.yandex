import "./input.scss";
import inputTemplate from "./input.hbs";
import Block from "../../utils/Block";

interface InputProps {
  placeholder?: string;
  value?: string;
  name: string;
  label: string;
  type: string;
  class?: string;
  events?: {
    blur?: (event: Event) => void;
    focus?: (event: Event) => void;
    change?: (event: Event) => void;
  };
}
class Input extends Block {
  constructor(props: InputProps) {
    super("div", props);
  }

  render() {
    return this.compile(inputTemplate, this.props);
  }
}

export default Input;
