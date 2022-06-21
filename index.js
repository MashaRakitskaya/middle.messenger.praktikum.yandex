// import template from "./src/components/component.js";
import "./src/styles/index.scss";
import signin from "./src/pages/signin/signin.js";

const root = document.getElementById("root");
const path = window.location.pathname;

function replacePath() {
  return window.location.replace("http://localhost:3000/signin");
}

if (path === "/") {
  replacePath();
} else if (path === "/signin") {
  root.innerHTML = signin;
}
