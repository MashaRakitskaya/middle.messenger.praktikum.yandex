export function queryStringify(data: Record<string, any>) {
  let string = "?";

  for (const dataKey in data) {
    string = `${string}${dataKey}=${data[dataKey]}&`;
  }

  return string.substring(0, string.length - 1);
}

export function isEqual(data1, data2) {
  return data1 === data2;
}

export const addErrorMessage = (message) => {
  const error = document.querySelector(".form-error") as HTMLElement;
  if (error) {
    error.style.visibility = "visible";
    error.textContent = message;
  }
};

export const showContextmenu = ({ event, contextMenu }) => {
  event.preventDefault();

  const contextMenuElement = document.querySelector(
    ".context-menu"
  ) as HTMLElement;

  const { clientX: mouseX, clientY: mouseY } = event;

  const { normalizedX, normalizedY } = contextMenu.normalizePozition(
    mouseX,
    mouseY,
    document.getElementById("sidebar")
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

export const showPopup = ({ popupId }) => {
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
  for (let p in rhs) {
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
