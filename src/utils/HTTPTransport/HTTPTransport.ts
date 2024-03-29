import { queryStringify } from "../utils";

interface Options {
  method: string;
  data?: Record<string, any>;
  headers?: Record<string, any>;
  timeout?: number;
}

const enum Methods {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

class HTTPTransport {
  get = (url: string, options: Options) => {
    const { data } = options;
    if (data) `${url}${queryStringify(data)}`;

    return this.request(
      url,
      { ...options, method: Methods.GET },
      options.timeout
    );
  };

  put = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.PUT },
      options.timeout
    );
  };

  post = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.POST },
      options.timeout
    );
  };

  delete = (url: string, options: Options) => {
    return this.request(
      url,
      { ...options, method: Methods.DELETE },
      options.timeout
    );
  };

  request = (
    url: string,
    options: Options = { method: Methods.GET },
    timeout = 5000
  ): any => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      for (const headerName in headers) {
        xhr.setRequestHeader(headerName, headers[headerName]);
      }
      xhr.withCredentials = true;

      xhr.onload = function () {
        if (this.status !== 200) {
          reject(JSON.parse(this.responseText).reason);
        } else {
          resolve(xhr);
        }
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = function () {
        reject();
      };

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        if (Object.prototype.toString.call(data) === "[object FormData]") {
          xhr.send(data as FormData);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  };
}

export default HTTPTransport;
