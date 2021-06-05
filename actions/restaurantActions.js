import axios from "axios";
import {
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_LIST_FILTER,
  RESTAURANT_LIST_REQUEST,
} from "../constants/restaurantConstants";

export const listRestaurant =
  (filter = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: RESTAURANT_LIST_REQUEST,
      });

      const { data } = await axios.get("/api/restaurants");

      if (filter === null) {
        dispatch({
          type: RESTAURANT_DETAILS_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: RESTAURANT_LIST_FILTER,
          payload: data,
          filter: filter,
        });
      }
    } catch (error) {
      dispatch({
        type: RESTAURANT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const restaurantDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/restaurants/${id}`);

    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
