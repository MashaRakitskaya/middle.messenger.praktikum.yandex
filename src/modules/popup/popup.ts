import "./popup.scss";
import popupTemplate from "./popup.hbs";
import Block from "../../utils/Block";
import PageTitle from "../../components/pageTitle/pageTitle";

interface PopupProps {
  isPopupAddUsersToChat?: boolean;
  formId: string;
  popupId: string;
  nameInput: string;
  labelInput: string;
  input?: Block;
  pageTitleText: string;
  popupFormButtonAdd?: Block;
  popupFormButtonSearch?: Block;
  popupFormButtonSave?: Block;
  setFoundUsers?: boolean;
  foundUsers?: Block;
}

interface target {
  target: HTMLElement;
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
    popupFormButtonSave,
    setFoundUsers,
    foundUsers,
  }: PopupProps) {
    const pageTitle = new PageTitle({
      title: pageTitleText,
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
      popupFormButtonSave,
      setFoundUsers,
      foundUsers,
      events: {
        click: ({ target }: target): void => {
          const avatar = document.getElementById(popupId) as HTMLElement;
          const formElement = document.getElementById(
            formId
          ) as HTMLFormElement;
          if (target.classList.contains("popup")) {
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
