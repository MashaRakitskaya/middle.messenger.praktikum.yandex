import "./avatar.scss";
import * as avatarTemplate from "./avatar.hbs";
import Block from "../../utils/Block";

interface AvatarProps {
  urlImg: string;
  class: string;
  events?: {
    click: () => void;
  };
}
class Avatar extends Block {
  constructor(props: AvatarProps) {
    super("div", props);
  }

  render() {
    return this.compile(avatarTemplate, this.props);
  }
}

export default Avatar;
