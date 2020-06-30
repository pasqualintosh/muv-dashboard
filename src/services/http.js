import axios from "axios";
import WebService from "./../config/WebService";

export async function requestNewBackend(
  method,
  api,
  access_token = null,
  data = {},
  ContentType,
  header
) {
  const headers = access_token
    ? {
        "content-type": ContentType
          ? ContentType
          : "application/x-www-form-urlencoded",
        Authorization: `${header} ${access_token}`,
        "Cache-Control": "no-cache",
      }
    : {
        "content-type": ContentType
          ? ContentType
          : "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      };

  try {
    const response = await axios({
      method,
      url: WebService.url + api,
      headers,
      data,
    });
    console.log(response.request.responseURL);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      //return error.response;
      return error.response;
      // if (error.response.status === 403) {
    } else if (error.request) {
      console.log(error.request);
      return error.request;
      // return error.request;
    } else {
      console.log(error.message);

      // return error.message;
    }
    console.log(error.config);
    return error;
  }
}
