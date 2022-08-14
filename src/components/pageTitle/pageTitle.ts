import "./pageTitle.scss";
import * as pageTitleTemplate from "./pageTitle.hbs";
import Block from "../../utils/Block";

interface PageTitleProps {
  pageTitle: string;
}

class PageTitle extends Block {
  constructor(props: PageTitleProps) {
    super("div", props);
  }

  render() {
    return this.compile(pageTitleTemplate, this.props);
  }
}

export default PageTitle;
