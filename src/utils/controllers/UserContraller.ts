import user from "../api/users";
import store from "../Store";

class UserContraller {
  searchUserByLogin({ login }) {
    user.searchUserByLogin({ login }).then((response) => {
      store.set("foundUsersSearch", JSON.parse(response.response));
    });
  }
}

const userContraller = new UserContraller();
export default userContraller;
