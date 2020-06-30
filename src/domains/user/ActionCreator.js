import { LOGIN } from "./ActionTypes";
import { requestNewBackend } from "./../../services/http";
import WebService from "./../../config/WebService";

export function login(dataLogin = {}, callAfterLoginOrRegister = false) {
  return async function (dispatch, getState) {
    const data = {
      grant_type: "password",
      username: dataLogin.email,
      password: dataLogin.password,
      client_id: WebService.client_id,
      client_secret: WebService.client_secret,
    };

    let date = +new Date();

    try {
      const response = await requestNewBackend(
        "post",
        "/api/v1/auth/token/",
        null,
        data,
        "application/json",
        "Bearer"
      );
      console.log(response);

      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;
        // per 1000 perche expires_in è in secondi
        date = date + 1000 * expires_in;
      } else if (response.status === 401 || response.status === 400) {
        // errore dati inseriti
        // dispatch({
        //   type: FAIL_LOGIN,
        //   payload: { error_description: response.data.error },
        // });
        // getActiveStatusProfile(ReactiveAccount, { email });

        if (response.data.error_description) {
          // Alert.alert(strings("id_0_10"), response.data.error_description);
          // Alert.alert(strings("id_0_10"), strings("id_0_11"));
        }
      } else if (response.status === 500) {
        // server non funziona bene
        // dispatch({
        //   type: FAIL_LOGIN,
        //   payload: { error_description: response.data.error },
        // });
      } else {
        // dispatch({
        //   type: FAIL_LOGIN,
        //   payload: { error_description: "error" },
        // });
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
        // dispatch({
        //   type: START_LOGIN,
        //   payload: {
        //     status: "",
        //   },
        // });
      } else {
        console.log(error.message);
      }
      // dispatch({
      //   type: FAIL_LOGIN,
      //   payload: { error_description: "error catch startLogin" },
      // });
      console.log(error.config);
    }
  };
}
