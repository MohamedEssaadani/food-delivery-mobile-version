import {
  FILM_LIST_FAIL,
  FILM_LIST_REQUEST,
  FILM_LIST_SUCCESS,
  FILM_DETAIL_REQUEST,
  FILM_DETAIL_SUCCESS,
  FILM_DETAIL_FAIL,
  FILM_REVIEWS_REQUEST,
  FILM_REVIEWS_SUCCESS,
  FILM_REVIEWS_FAIL,
  TOGGLE_FAVORITE,
} from "../constants/filmConstants"

const filmListReducer = (state, action) => {
  switch (action.type) {
    case FILM_LIST_REQUEST: {
      return {
        loading: true,
      }
    }
    case FILM_LIST_SUCCESS: {
      return {
        loading: false,
        films: action.payload,
      }
    }
    case FILM_LIST_FAIL: {
      return {
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return {}
    }
  }
}

const filmDetailReducer = (state, action) => {
  switch (action.type) {
    case FILM_DETAIL_REQUEST: {
      return {
        loading: true,
      }
    }
    case FILM_DETAIL_SUCCESS: {
      return {
        loading: false,
        film: action.payload,
      }
    }
    case FILM_DETAIL_FAIL: {
      return {
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return {}
    }
  }
}

const filmReviewsReducer = (state, action) => {
  switch (action.type) {
    case FILM_REVIEWS_REQUEST: {
      return {
        loading: true,
      }
    }
    case FILM_REVIEWS_SUCCESS: {
      return {
        loading: false,
        reviews: action.payload,
      }
    }
    case FILM_REVIEWS_FAIL: {
      return {
        loading: false,
        error: action.payload,
      }
    }
    default: {
      return {}
    }
  }
}



export { filmListReducer, filmDetailReducer, filmReviewsReducer }
