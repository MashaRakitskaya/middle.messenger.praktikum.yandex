import "./settingsButtonSidebar.scss";
import settingsButtonSidebarTemplate from "./settingsButtonSidebar.hbs";
import Block from "../../utils/Block";

interface target {
  target: HTMLElement;
}

interface SettingsButtonSidebarProps {
  events: {
    contextmenu: (event: {
      clientX: string;
      clientY: string;
      preventDefault();
    }) => void;
    click: ({ target }: target) => void;
  };
}

class SettingsButtonSidebar extends Block {
  constructor(props: SettingsButtonSidebarProps) {
    super("div", props);
  }

  render() {
    return this.compile(settingsButtonSidebarTemplate, this.props);
  }
}

export default SettingsButtonSidebar;