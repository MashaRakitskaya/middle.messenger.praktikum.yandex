export const BASE_URL = window.origin;
export const SIGNIN_PATH = "/";
export const SIGNUP_PATH = "/signup";
export const PROFILE_SETTING_PATH = "/profile-setting";
export const PASSWORD_SETTING_PATH = "/password-setting";
export const MESSENGER_PATH = "/messenger";
export const ERROR404_PATH = "/404";
export const ERROR500_PATH = "/500";
export const ROOT_DIV = "#root";

export const inputsProperties = {
  login: {
    name: "login",
    label: "login",
    type: "text",
  },
  password: {
    name: "password",
    label: "password",
    type: "password",
  },
  passwordAgain: {
    name: "password (again)",
    label: "password (again)",
    type: "password",
  },
  oldPassword: {
    name: "old_password",
    label: "old password",
    type: "password",
  },
  email: {
    name: "email",
    label: "email",
    type: "email",
  },
  firstName: {
    name: "first_name",
    label: "name",
    type: "text",
  },
  secondName: {
    name: "second_name",
    label: "surename",
    type: "text",
  },
  phone: {
    name: "phone",
    label: "phone number",
    type: "tel",
  },
  displayName: {
    name: "display_name",
    label: "chat name",
    type: "text",
  },
  message: {
    name: "message",
    type: "text",
  },
  avatar: {
    name: "avatar",
    label: "avatar",
    type: "file",
  },
  chatTitle: {
    name: "title",
    label: "chat title",
    type: "text",
  },
  users: {
    name: "users",
    label: "users",
    type: "search",
  },
};

export const popupIds = {
  idPopupAddChat: "idPopupAddChat",
  idPopupAddUsers: "idPopupAddUsers",
  idPopupDeleteUsers: "idPopupDeleteUsers",
  idPopupDeleteChat: "idPopupDeleteChat",
  idPopupAddAvatar: "idPopupAddAvatar",
};

export const formsIds = {
  idAddChat: "idAddChat",
  idAddUsers: "idAddUsers",
  idDeleteUsers: "idDeleteUsers",
  idDeleteChat: "idDeleteChat",
  idAddAvatar: "idAddAvatar",
};
