import "./popup.scss";
import popupTemplate from "./popup.hbs";
import Block from "../../utils/Block";
import PageTitle from "../../components/pageTitle/pageTitle";

interface PopupProps {
  isPopupAddUsersToChat?;
  formId;
  popupId;
  nameInput;
  labelInput;
  input?;
  pageTitleText;
  popupFormButtonAdd?;
  popupFormButtonSearch?;
  setFoundUsers?;
  foundUsers?;
}

class Popup extends Block {
  constructor({
    isPopupAddUsersToChat,
    formId,
    popupId,
    nameInput,
    labelInput,
    input,
    pageTitleText,
    popupFormButtonAdd,
    popupFormButtonSearch,
    setFoundUsers,
    foundUsers,
  }: PopupProps) {
    const pageTitle = new PageTitle({
      pageTitle: pageTitleText,
    });

    super("div", {
      isPopupAddUsersToChat,
      formId,
      popupId,
      nameInput,
      labelInput,
      input,
      pageTitle,
      popupFormButtonAdd,
      popupFormButtonSearch,
      setFoundUsers,
      foundUsers,
      events: {
        click: (event) => {
          const avatar = document.getElementById(popupId) as HTMLElement;
          const formElement = document.getElementById(
            formId
          ) as HTMLFormElement;
          if (event.target.classList.contains("popup")) {
            avatar.classList.remove("popup_opened");
            if (isPopupAddUsersToChat) {
              this.setProps({ setFoundUsers: false });
            }
          }
          formElement.reset();
        },
      },
    });
  }

  render() {
    return this.compile(popupTemplate, this.props);
  }
}

export default Popup;
