import "./editAvatar.scss";
import profileImg from "../../images/profileimg.svg";
import editAvatarTemplate from "./editAvatar.hbs";
import Avatar from "../avatar/avatar";
import Block from "../../utils/Block";
import auth from "../../utils/api/auth";

interface EditAvatarProps {
  events: {
    click: () => void;
  };
}
class EditAvatar extends Block {
  constructor(props: EditAvatarProps) {
    const profileAvatar = new Avatar({
      urlImg: profileImg,
      class: "profile-avatar",
    });

    auth.getUser().then((response) => {
      const data = JSON.parse(response.response);
      const { avatar } = data;
      if (avatar) {
        profileAvatar.setProps({
          urlImg: `https://ya-praktikum.tech/api/v2/resources${avatar}`,
        });
      }
    });
    super("div", { ...props, profileAvatar });
  }

  render() {
    return this.compile(editAvatarTemplate, this.props);
  }
}

export default EditAvatar;
