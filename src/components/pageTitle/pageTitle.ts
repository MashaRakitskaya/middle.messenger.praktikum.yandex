import "./pageTitle.scss";
import pageTitleTemplate from "./pageTitle.hbs";
import Block from "../../utils/Block";

interface PageTitleProps {
  title: string;
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
