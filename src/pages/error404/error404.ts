import "../../modules/error/error.ts";
import { BASE_URL, CHATS_PATH } from "../../utils/utils.ts";
import error404 from "./error404.hbs";
import "./error404.scss";

const data = {
  errorTitle: "404",
  errorText: "Page not found",
  url: `${BASE_URL}${CHATS_PATH}`,
};

export default error404(data);
