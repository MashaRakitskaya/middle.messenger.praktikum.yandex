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
