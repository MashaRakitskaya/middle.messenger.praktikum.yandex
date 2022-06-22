import "../../components/back/back.js";
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
        name: "old password",
        label: "old password",
        type: "password",
      },
    },
    {
      inputContext: {
        name: "new password",
        label: "new password",
        type: "password",
      },
    },
    {
      inputContext: {
        name: "new password (again)",
        label: "new password (again)",
        type: "password",
      },
    },
  ],
};

export default passwordSetting(data);
