import axios from "axios";
import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
} from "../constants/restaurantConstants";

export const listRestaurant = () => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://192.168.1.15:5000/api/restaurants"
    );

    dispatch({
      type: RESTAURANT_LIST_SUCCESS,
      payload: data,
    });
    // if (filter === null) {
    //   dispatch({
    //     type: RESTAURANT_DETAILS_SUCCESS,
    //     payload: data,
    //   });
    // } else {
    // dispatch({
    //   type: RESTAURANT_LIST_FILTER,
    //   payload: data,
    //   filter: filter,
    // });
    // }
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

    const { data } = await axios.get(
      `http://192.168.1.15:5000/api/restaurants/${id}`
    );

    console.log(data);
    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
