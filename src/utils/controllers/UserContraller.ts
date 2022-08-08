import user from "../api/users";
import store from "../Store";

class UserContraller {
  searchUserByLogin({ login }: { login: string }) {
    user.searchUserByLogin({ login }).then((response: { response: string }) => {
      store.set("foundUsersSearch", JSON.parse(response.response));
    });
  }
}

const userContraller = new UserContraller();
export default userContraller;
