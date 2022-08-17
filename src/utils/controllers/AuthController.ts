import auth from "../api/auth";
import store from "../Store";

class AuthController {
  getUser() {
    auth.getUser().then((response: { response: string }) => {
      store.set("user", JSON.parse(response.response));
    });
  }
}

const authController = new AuthController();
export default authController;
