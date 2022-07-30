import "./popup.scss";
import popupTemplate from "./popup.hbs";
import Block from "../../utils/Block";
import PageTitle from "../../components/pageTitle/pageTitle";

class Popup extends Block {
  constructor({
    nameInput,
    labelInput,
    input,
    pageTitleText,
    popupFormButton,
  }) {
    const pageTitle = new PageTitle({
      pageTitle: pageTitleText,
    });
    super("div", {
      nameInput,
      labelInput,
      input,
      pageTitle,
      popupFormButton,
      events: {
        click: (event) => {
          const avatar = document.getElementById("popup") as HTMLElement;
          if (event.target.classList.contains("popup")) {
            avatar.classList.remove("popup_opened");
          }
        },
      },
    });
  }

  render() {
    return this.compile(popupTemplate, this.props);
  }
}

export default Popup;
