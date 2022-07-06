import "../../components/back/back.ts";
import "./passwordSetting.scss";
import passwordSetting from "./passwordSetting.hbs";

const data = {
  pageTitleContext: {
    pageTitle: "Change password",
  },
  formButtonContext: {
    buttonText: "Save",
  },
  inputs: [
    {
      inputContext: {
        name: "oldPassword",
        label: "old password",
        type: "password",
      },
    },
    {
      inputContext: {
        name: "newPassword",
        label: "new password",
        type: "password",
      },
    },
    {
      inputContext: {
        name: "newPassword (again)",
        label: "new password (again)",
        type: "password",
      },
    },
  ],
};

export default passwordSetting(data);
