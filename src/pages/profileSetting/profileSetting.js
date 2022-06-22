import "../../components/back/back.js";
import "./profileSetting.scss";
import profileSetting from "./profileSetting.hbs";
import profileImg from "../../images/profileimg.svg";

const data = {
  pageTitleContext: {
    pageTitle: "Сhange profile data",
  },
  formButtonContext: {
    buttonText: "Save",
  },
  isProfileImg: true,
  urlImg: profileImg,
  inputs: [
    {
      inputContext: {
        name: "email",
        label: "email",
        type: "email",
      },
    },
    {
      inputContext: {
        name: "login",
        label: "login",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "name",
        label: "name",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "surename",
        label: "surename",
        type: "text",
      },
    },
    {
      inputContext: {
        name: "phone number",
        label: "phone number",
        type: "tel",
      },
    },
  ],
};

export default profileSetting(data);
