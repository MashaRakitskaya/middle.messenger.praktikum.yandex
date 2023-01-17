import { JSDOM } from "jsdom";
import Block from "../utils/Block";
import { expect } from "chai";
import * as Handlebars from "handlebars";
import { renderDom } from "../utils/renderDOM";

const template = `<h1 id="page">Page</h1>`;

class Component extends Block {
  constructor() {
    super("div");
  }

  render() {
    const templateHandlebars = Handlebars.compile(template);
    return this.compile(templateHandlebars, this.props);
  }
}

describe("Component", () => {
  beforeEach(() => {
    const { window } = new JSDOM(
      `<html>
         <body>
          <div id="root"></div>
         </body>
       </html>`,
      { url: "http://localhost" }
    );

    global.window = window;
    global.document = window.document;
  });

  it("template", () => {
    const component = new Component();
    renderDom("#root", component);
    expect(document.body.innerHTML).to.contain(template);
  });
});
