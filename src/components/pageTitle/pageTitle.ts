import "./pageTitle.scss";
import pageTitleTemplate from "./pageTitle.hbs";
import Block from "../../common/Block";

class PageTitle extends Block {
  constructor(props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(pageTitleTemplate, this.props);
  }
}

export default PageTitle;
