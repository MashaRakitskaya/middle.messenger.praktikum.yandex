import "../../modules/error/error.js";
import { BASE_URL, CHATS_PATH } from "../../utils/utils.js";
import error500 from "./error500.hbs";
import "./error500.scss";

const data = {
  errorTitle: "500",
  errorText: "We are already fixing",
  url: `${BASE_URL}${CHATS_PATH}`,
};

export default error500(data);
