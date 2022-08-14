import "./foundUser.scss";
import * as foundUserTemplate from "./foundUser.hbs";
import Block from "../../utils/Block";

interface FoundUserProps {
  id?: string;
  login?: string;
  second_name?: string;
  events?: {
    click?: () => void;
  };
}

class FoundUser extends Block {
  constructor(props: FoundUserProps) {
    super("div", props);
  }

  render() {
    return this.compile(foundUserTemplate, this.props);
  }
}

export default FoundUser;
