import DefaultState from "./DefaultState";
import { LOGIN } from "./ActionTypes";

export default (state = DefaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state };

    default:
      return state;
  }
};
