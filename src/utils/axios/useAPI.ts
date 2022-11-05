import axios from "axios";
import * as msg from "../notification/index";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : 'http://localhost:3333/';
axios.defaults.withCredentials = true;
const callApi = async (
  url: string,
  method: "get" | "post" = "get",
  body: {} | null = null,
  is_response_allow:true | false = false,
) => {
  if (url.charAt(0) !== "/") {
    url = "/" + url;
  }

  let apiUrl = url;
  if (process.env.NEXT_PUBLIC_NODE_ENV == "production") {
    apiUrl = `https://${window.location.hostname}/api` + url;
  } else {
    axios.defaults.baseURL = BASE_URL;
  }

  try {
    const res = await axios({
      url: apiUrl,
      method: method,
      data: body,
    });
    return res.data;
  } catch (e) {
    if (e.response) {
      if (e?.response?.status === 400 || e?.response?.status === 401) {
        msg.i(e.response.data.msg);
      } else if (e.response.status === 422) {
        msg.showBackendErrors(e.response);
      } else if (e.response.status === 403) {
        window.location.href = "/login";
      } else {
        msg.swr();
      }
    } else {
      msg.swr();
    }
    if(is_response_allow){
      return e?.response
    }
    return false;
  }
};

export default callApi;
