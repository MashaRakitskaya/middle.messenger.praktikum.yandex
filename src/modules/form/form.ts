import "./form.scss";
import formTemplate from "./form.hbs";
import Block from "../../common/Block/Block";

class Form extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    console.log(this.props);
    return this.compile(formTemplate, this.props);
  }
}

export default Form;
