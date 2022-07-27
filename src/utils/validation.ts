import { inputsProperties } from "./constants";

interface ValidationMessageAndRegExp {
  message: string;
  regExp?: RegExp;
  isValid: (value: any) => boolean;
}

interface InputIsNotValid {
  input: ValidationMessageAndRegExp;
  target: HTMLInputElement;
  value: any;
  message: string;
}

interface OnBlurProps {
  target: HTMLInputElement;
  value: any;
  name: string;
}

interface onFocusProps {
  target: HTMLInputElement;
}

export const inputIsNotValid = ({
  input,
  target,
  value,
  message,
}: InputIsNotValid) => {
  !input.isValid(value) && addErrorMessage(target, message);
  return input.isValid(value);
};

export const onBlur = ({ target, value, name }: OnBlurProps) => {
  const {
    login,
    firstName,
    secondName,
    email,
    oldPassword,
    password,
    passwordAgain,
    phone,
  } = validationMessageAndRegExp;

  if (name === inputsProperties.login.name) {
    value !== "" &&
      inputIsNotValid({
        input: login,
        target: target,
        value: value,
        message: login.message,
      });
  } else if (name === inputsProperties.firstName.name) {
    value !== "" &&
      inputIsNotValid({
        input: firstName,
        target: target,
        value: value,
        message: firstName.message,
      });
  } else if (name === inputsProperties.secondName.name) {
    value !== "" &&
      inputIsNotValid({
        input: secondName,
        target: target,
        value: value,
        message: secondName.message,
      });
  } else if (name === inputsProperties.email.name) {
    value !== "" &&
      inputIsNotValid({
        input: email,
        target: target,
        value: value,
        message: email.message,
      });
  } else if (name === inputsProperties.oldPassword.name) {
    value !== "" &&
      inputIsNotValid({
        input: oldPassword,
        target: target,
        value: value,
        message: oldPassword.message,
      });
  } else if (name === inputsProperties.password.name) {
    value !== "" &&
      inputIsNotValid({
        input: password,
        target: target,
        value: value,
        message: password.message,
      });
  } else if (name === inputsProperties.passwordAgain.name) {
    value !== "" &&
      inputIsNotValid({
        input: passwordAgain,
        target: target,
        value: value,
        message: passwordAgain.message,
      });
  } else if (name === inputsProperties.phone.name) {
    value !== "" &&
      inputIsNotValid({
        input: phone,
        target: target,
        value: value,
        message: phone.message,
      });
  }
};

export const onFocus = ({ target }: onFocusProps) => {
  removeErrorMessage(target);
};

export const addErrorMessage = (input, message) => {
  const error = input.parentNode.children[1];
  error.style.visibility = "visible";
  error.textContent = message;
};

export const removeErrorMessage = (target) => {
  const error = target.parentNode.children[1];
  error.style.visibility = "hidden";
  error.textContent = "";
};

export const validationMessageAndRegExp = {
  login: {
    message:
      "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
    regExp: /^[a-zA-Z0-9-_]{3,20}$(?<=.*?[a-zA-Z].*?)/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  firstName: {
    message:
      "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
    regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  secondName: {
    message:
      "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
    regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  email: {
    message:
      "латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
    regExp: /^[a-z0-9-]+@[a-z0-9-]+.[a-z]{2,6}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  oldPassword: {
    message:
      "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  password: {
    message:
      "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  passwordAgain: {
    message:
      "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  phone: {
    message: "от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
    regExp: /^([0-9]+).{10,15}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  message: { message: "не должно быть пустым." },
};

export const getFormData = (formId: string) => {
  const dataObject: Record<string, any> = {};
  const formElement = document.getElementById(formId) as HTMLFormElement;
  const formData = new FormData(formElement);
  for (const [name, value] of formData) {
    dataObject[name] = value;
  }
  return dataObject;
};
