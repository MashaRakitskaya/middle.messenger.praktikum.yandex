type Url = {
  url: string;
};

interface Options {
  method: string;
  data?: Record<string, any>;
  headers?: Record<string, any>;
  timeout?: number;
}

const enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

class HTTPTransport {
  queryStringify(data: Record<string, any>) {
    let string = "?";

    for (const dataKey in data) {
      string = `${string}${dataKey}=${data[dataKey]}&`;
    }

    return string.substring(0, string.length - 1);
  }
  get = (url: Url, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  put = (url: Url, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  post = (url: Url, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  delete = (url: Url, options: Options) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (
    url,
    options: Options = { method: METHODS.GET },
    timeout = 5000
  ) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGetMethod = method === "GET";
      xhr.open(
        method,
        data && isGetMethod ? `${url}${this.queryStringify(data)}` : url
      );

      for (const headerName in headers) {
        xhr.setRequestHeader(headerName, headers[headerName]);
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = function () {
        reject();
      };

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
