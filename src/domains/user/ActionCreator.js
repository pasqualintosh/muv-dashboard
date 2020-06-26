import { LOGIN } from "./ActionTypes";

export function login() {
  console.log("login");
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: LOGIN,
        payload: {},
      });
    } catch (error) {
      console.log("error");
    }
  };
}
