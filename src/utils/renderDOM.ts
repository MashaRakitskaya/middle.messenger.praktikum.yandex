import Block from "./Block";

export function renderDom(query: string, block: Block) {
  const root = document.querySelector(query) as HTMLElement;

  root.appendChild(block.getContent());
  //flow:component-did-mount триггерится вне блока в функции renderDom.
  //Это связано с тем, что оно должно быть вызвано после того, как компонент появился в DOM дереве («замаунтился»).
  block.dispatchComponentDidMount();

  return root;
}
