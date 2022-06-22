import "./src/styles/index.scss";
import {
  BASE_URL,
  SIGNIN_PATH,
  SIGNUP_PATH,
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH,
} from "./src/utils/utils";
import signin from "./src/pages/signin/signin.js";
import signup from "./src/pages/signup/signup.js";
import profileSetting from "./src/pages/profileSetting/profileSetting.js";
import passwordSetting from "./src/pages/passwordSetting/passwordSetting.js";

const root = document.getElementById("root");
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
}
