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
  rootDiv,
} from "./src/utils/utils";
import Signin from "./src/pages/signin/signin";
import PasswordSetting from "./src/pages/passwordSetting/passwordSetting";
import Error404 from "./src/pages/error404/error404";
import Error500 from "./src/pages/error500/error500";
import chats from "./src/pages/chats/chats";
import { renderDom } from "./src/utils/renderDOM";
import Signup from "./src/pages/signup/signup";
import ProfileSetting from "./src/pages/profileSetting/profileSetting";

const path = window.location.pathname;

function replacePath() {
  return window.location.replace(`${BASE_URL}${SIGNIN_PATH}`);
}

if (path === "/") {
  replacePath();
} else if (path === ERROR404_PATH) {
  const error404 = new Error404();
  renderDom(rootDiv, error404);
} else if (path === ERROR500_PATH) {
  const error500 = new Error500();
  renderDom(rootDiv, error500);
} else if (path === SIGNIN_PATH) {
  const signin = new Signin();
  renderDom(rootDiv, signin);
} else if (path === SIGNUP_PATH) {
  const signup = new Signup();
  renderDom(rootDiv, signup);
} else if (path === PROFILE_SETTING_PATH) {
  const profileSetting = new ProfileSetting();
  renderDom(rootDiv, profileSetting);
} else if (path === PASSWORD_SETTING_PATH) {
  const passwordSetting = new PasswordSetting();
  renderDom(rootDiv, passwordSetting);
}
