import "./src/styles/index.scss";
import { BASE_URL, SIGNIN_PATH, SIGNUP_PATH } from "./src/utils/utils";
import signin from "./src/pages/signin/signin.js";
import signup from "./src/pages/signup/signup.js";

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
}
