import ContextMenu from "../modules/contextMenu/contextMenu";

export function queryStringify(data: Record<string, any>) {
  let string = "?";

  for (const dataKey in data) {
    string = `${string}${dataKey}=${data[dataKey]}&`;
  }

  return string.substring(0, string.length - 1);
}

export function isEqualString(data1: string, data2: string) {
  return data1 === data2;
}

export const addErrorMessage = (message: string) => {
  const error = document.querySelector(".form-error") as HTMLElement;
  if (error) {
    error.style.visibility = "visible";
    error.textContent = message;
  }
};

export const showContextmenu = ({
  event,
  contextMenu,
}: {
  event: {
    preventDefault(): unknown;
    clientX: number;
    clientY: number;
  };
  contextMenu: ContextMenu;
}) => {
  event.preventDefault();

  const contextMenuElement = document.querySelector(
    ".context-menu"
  ) as HTMLElement;

  const { clientX: mouseX, clientY: mouseY } = event;
  const sidebarElement = document.getElementById("sidebar") as HTMLElement;

  const { normalizedX, normalizedY } = contextMenu.normalizePozition(
    mouseX,
    mouseY,
    sidebarElement
  );

  if (contextMenuElement) {
    contextMenuElement.classList.remove("visible");
    contextMenuElement.style.top = `${normalizedY}px`;
    contextMenuElement.style.left = `${normalizedX}px`;

    setTimeout(() => {
      contextMenuElement.classList.add("visible");
    });
  }
};

export const showPopup = ({ popupId }: { popupId: string }) => {
  const avatar = document.getElementById(popupId) as HTMLElement;
  avatar.classList.add("popup_opened");
};

export const hidePopup = (popup: HTMLElement) => {
  popup.classList.remove("popup_opened");
};

type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(state: Indexed, path: string, value: any): Indexed {
  if (typeof state !== "object" || state === null) {
    return state;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );
  return merge(state as Indexed, result);
}

type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}
