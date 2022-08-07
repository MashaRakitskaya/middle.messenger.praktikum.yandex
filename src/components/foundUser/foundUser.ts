import "./foundUser.scss";
import foundUserTemplate from "./foundUser.hbs";
import Block from "../../utils/Block";
import { connect } from "../../utils/hoc";

interface FoundUserProps {
  id?: string;
  login?: string;
  second_name?: string;
  events?: {
    click?: (event) => void;
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
