import { LOGIN } from "./ActionTypes";

export function login() {
  console.log("login");
  try {
    dispatch({
      type: LOGIN,
      payload: {},
    });
  } catch (error) {
    console.log("error");
  }
}
