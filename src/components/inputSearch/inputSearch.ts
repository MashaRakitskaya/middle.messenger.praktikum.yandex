import "./inputSearch.scss";
import inputSearchTemplate from "./inputSearch.hbs";
import Block from "../../utils/Block";
interface InputSearchProps {
  inputName: string;
}
class InputSearch extends Block {
  constructor(props: InputSearchProps) {
    super("div", props);
  }

  render() {
    return this.compile(inputSearchTemplate, this.props);
  }
}

export default InputSearch;
