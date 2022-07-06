import "./src/styles/index.scss";
import {
  BASE_URL,
  SIGNIN_PATH,
  SIGNUP_PATH,
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH,
  ERROR404_PATH,
  ERROR500_PATH,
  CHATS_PATH,
} from "./src/utils/utils";
import signin from "./src/pages/signin/signin";
import signup from "./src/pages/signup/signup";
import profileSetting from "./src/pages/profileSetting/profileSetting";
import passwordSetting from "./src/pages/passwordSetting/passwordSetting";
import error404 from "./src/pages/error404/error404";
import error500 from "./src/pages/error500/error500";
import chats from "./src/pages/chats/chats";

const root = document.getElementById("root") as HTMLElement;
const path = window.location.pathname;

function replacePath() {
  return window.location.replace(`${BASE_URL}${SIGNIN_PATH}`);
}

if (path === "/") {
  replacePath();
} else if (path === SIGNIN_PATH) {
  root.innerHTML = signin;
} else if (path === SIGNUP_PATH) {
  root.innerHTML = signup;
} else if (path === PROFILE_SETTING_PATH) {
  root.innerHTML = profileSetting;
} else if (path === PASSWORD_SETTING_PATH) {
  root.innerHTML = passwordSetting;
} else if (path === ERROR404_PATH) {
  root.innerHTML = error404;
} else if (path === ERROR500_PATH) {
  root.innerHTML = error500;
} else if (path === CHATS_PATH) {
  root.innerHTML = chats;
}