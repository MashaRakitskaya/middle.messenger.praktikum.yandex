import "./error.scss";
import errorTemplate from "./error.hbs";
import Block from "../../utils/Block";

interface ErrorProps {
  errorTitle: string;
  errorText: string;
  url: string;
}

class Error extends Block {
  constructor(props: ErrorProps) {
    super("div", props);
  }

  render() {
    return this.compile(errorTemplate, this.props);
  }
}

export default Error;
