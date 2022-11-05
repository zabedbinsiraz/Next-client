import axios from "axios";
import { NextPageContext } from "next";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : "http://localhost:3333/";
axios.defaults.withCredentials = true;
const serverApi = async (
  ctx: NextPageContext,
  url: string,
  method: "get" | "post" = "get",
  body: Record<string, any> = {},
  isErrHandlingEnabled = true
) => {
  if (url.charAt(0) !== "/") {
    url = "/" + url;
  }

  let apiUrl = url;
  if (process.env.NEXT_PUBLIC_NODE_ENV == "production") {
    if (ctx.req) {
      apiUrl = `https://${ctx.req.headers.host}/api` + url;
    } else {
      apiUrl = `https://${window.location.hostname}/api` + url;
    }
  } else {
    axios.defaults.baseURL = BASE_URL;
  }
  try {
    const response = await axios({
      method: method,
      url: apiUrl,
      headers: ctx?.req?.headers?.cookie
        ? { cookie: ctx.req.headers.cookie }
        : undefined,
      withCredentials: true,
      data: body || null,
    });

    return { data: response.data };
  } catch (error) {
    if (isErrHandlingEnabled) {
    }
  }
};
export default serverApi;
