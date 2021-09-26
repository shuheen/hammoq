import axios from "axios";

import { GET_ERRORS, SET_USER_DETAILS, UPDATE_USER_DETAILS } from "./types";

// Register User
export const getUserDetails = (email) => (dispatch) => {
  axios
    .post("/api/users/getUserDetails", { email: email })
    .then((res) => {
      dispatch({
        type: SET_USER_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const updateUserDetails = (user) => (dispatch) => {
  console.log("============user==============");
  console.log(user);
  axios
    .post("/api/users/updateUser", user)
    .then((res) => {
      dispatch({
        type: UPDATE_USER_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
