import auth from "../api/auth";
import store from "../Store";

class AuthController {
  getUser() {
    auth.getUser().then((response) => {
      store.set("user", JSON.parse(response.response));
    });
  }
}

const authController = new AuthController();
export default authController;