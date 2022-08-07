import "./buttonImg.scss";
import buttonImgTemplate from "./buttonImg.hbs";
import Block from "../../utils/Block";

interface ButtonImgProps {
  imgButton: string;
  altText: string;
  events: {
    click: () => void;
  };
}

class ButtonImg extends Block {
  constructor(props: ButtonImgProps) {
    super("div", props);
  }

  render() {
    return this.compile(buttonImgTemplate, this.props);
  }
}

export default ButtonImg;
