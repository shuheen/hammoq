import { SET_USER_DETAILS, UPDATE_USER_DETAILS } from "../actions/types";

const initialState = {
  userData: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userData: action.payload,
      };
    case UPDATE_USER_DETAILS:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
