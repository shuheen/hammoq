import {
  SET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  SET_SUCCESS_FLAG,
} from "../actions/types";

const initialState = {
  userData: {},
  userUpdated: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userData: action.payload,
      };
    case SET_SUCCESS_FLAG:
      return {
        ...state,
        userUpdated: action.payload,
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
