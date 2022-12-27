import {Request} from "./request";

export async function post(url, data, headers, token) {
  const conn = await new Request(headers, token);
  return conn.post(url, data);
}
