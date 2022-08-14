import "./contextMenu.scss";
import * as contextMenuTemplate from "./contextMenu.hbs";
import Block from "../../utils/Block";
import ContextMenuItem from "../../components/contextMenuItem/contextMenuItem";

class ContextMenu extends Block {
  constructor({ data }: { data: any }) {
    super("div");
    const contextMenuItems: any = [];

    data.forEach((element: { itemText: string; events: any }) => {
      contextMenuItems.push(
        new ContextMenuItem({
          itemText: element.itemText,
          events: element.events,
        })
      );
    });

    this.setProps({
      contextMenuItems: contextMenuItems,
    });
  }

  normalizePozition(mouseX: number, mouseY: number, scope: HTMLElement) {
    const contextMenu = document.querySelector(".context-menu") as HTMLElement;
    let { left: scopeOffsetX, top: scopeOffsetY } =
      scope.getBoundingClientRect();

    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;
    let normalizedX = mouseX;
    let normalizedY = mouseY;

    if (contextMenu) {
      const outOfBoundsOnX =
        scopeX + contextMenu.clientWidth > scope.clientWidth;

      const outOfBoundsOnY =
        scopeY + contextMenu.clientHeight > scope.clientHeight;

      if (outOfBoundsOnX) {
        normalizedX =
          scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
      }

      if (outOfBoundsOnY) {
        normalizedY =
          scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
      }
    }
    return { normalizedX, normalizedY };
  }

  render() {
    return this.compile(contextMenuTemplate, this.props);
  }
}

export default ContextMenu;
