import "./inputSearch.scss";
import inputSearchTemplate from "./inputSearch.hbs";
import Block from "../../common/Block/Block";

class InputSearch extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(inputSearchTemplate, this.props);
  }
}

export default InputSearch;
