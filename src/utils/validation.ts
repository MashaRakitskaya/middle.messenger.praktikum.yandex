import { inputsProperties } from "./utils";

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

interface OnBlur {
  target: HTMLInputElement;
  value: any;
  input: string;
}

export const inputIsNotValid = ({
  input,
  target,
  value,
  message,
}: InputIsNotValid) => {
  !input.isValid(value) && addErrorMessage(target, message);
};

export const onBlur = ({ target, value, input }: OnBlur) => {
  const {
    login,
    first_name,
    second_name,
    email,
    password,
    password_again,
    phone,
  } = validationMessageAndRegExp;

  if (input === inputsProperties.login.name) {
    value !== "" &&
      inputIsNotValid({
        input: login,
        target: target,
        value: value,
        message: login.message,
      });
  } else if (input === inputsProperties.first_name.name) {
    value !== "" &&
      inputIsNotValid({
        input: first_name,
        target: target,
        value: value,
        message: first_name.message,
      });
  } else if (input === inputsProperties.second_name.name) {
    value !== "" &&
      inputIsNotValid({
        input: second_name,
        target: target,
        value: value,
        message: second_name.message,
      });
  } else if (input === inputsProperties.email.name) {
    value !== "" &&
      inputIsNotValid({
        input: email,
        target: target,
        value: value,
        message: email.message,
      });
  } else if (input === inputsProperties.password.name) {
    value !== "" &&
      inputIsNotValid({
        input: password,
        target: target,
        value: value,
        message: password.message,
      });
  } else if (input === inputsProperties.password_again.name) {
    value !== "" &&
      inputIsNotValid({
        input: password_again,
        target: target,
        value: value,
        message: password_again.message,
      });
  } else if (input === inputsProperties.phone.name) {
    value !== "" &&
      inputIsNotValid({
        input: phone,
        target: target,
        value: value,
        message: phone.message,
      });
  }
};

export const onFocus = ({target}) => {
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
  first_name: {
    message:
      "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
    regExp: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  second_name: {
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
  password: {
    message:
      "от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
    regExp: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
    isValid(value) {
      return this.regExp.test(value);
    },
  },
  password_again: {
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

export const getformData = () => {
  const dataObject: Record<string, any> = {};
  const formElement = document.querySelector("form") as HTMLFormElement;
  const formData = new FormData(formElement);
  for (let [name, value] of formData) {
    dataObject[name] = value;
  }
  console.log(dataObject);
};
