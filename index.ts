import "./src/styles/index.scss";
import {
  SIGNIN_PATH,
  SIGNUP_PATH,
  PROFILE_SETTING_PATH,
  PASSWORD_SETTING_PATH,
  ERROR404_PATH,
  ERROR500_PATH,
  MESSENGER_PATH,
  ROOT_DIV,
} from "./src/utils/constants";
import Signin from "./src/pages/signin/signin";
import PasswordSetting from "./src/pages/passwordSetting/passwordSetting";
import Error404 from "./src/pages/error404/error404";
import Error500 from "./src/pages/error500/error500";
import Chat from "./src/pages/chat/chat";
import Signup from "./src/pages/signup/signup";
import ProfileSetting from "./src/pages/profileSetting/profileSetting";
import Router from "./src/utils/Router";

export const router = new Router(ROOT_DIV);

router
  .use(SIGNIN_PATH, Signin)
  .use(SIGNUP_PATH, Signup)
  .use(ERROR404_PATH, Error404)
  .use(ERROR500_PATH, Error500)
  .use(PROFILE_SETTING_PATH, ProfileSetting)
  .use(PASSWORD_SETTING_PATH, PasswordSetting)
  .use(MESSENGER_PATH, Chat)
  .start();
