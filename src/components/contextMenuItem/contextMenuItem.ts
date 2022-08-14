import "./contextMenuItem.scss";
import * as contextMenuItemTemplate from "./contextMenuItem.hbs";
import Block from "../../utils/Block";

interface ContextMenuItemProps {
  itemText: string;
  events: {
    click: () => void;
  };
}

class ContextMenuItem extends Block {
  constructor(props: ContextMenuItemProps) {
    super("div", props);
  }

  render() {
    return this.compile(contextMenuItemTemplate, this.props);
  }
}

export default ContextMenuItem;
