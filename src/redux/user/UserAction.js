import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
} from "./UserTypes";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(fetchUserFailure(err));
      });
  };
};
