import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  filmListReducer,
  filmDetailReducer,
  filmReviewsReducer,
} from "../reducers/filmReducers";

import {
  restaurantDetailsReducer,
  restaurantListReducer,
} from "../reducers/restaurantReducers";
import toggleFavorite from "../reducers/favoriteReducer";

const reducer = combineReducers({
  filmList: filmListReducer,
  film: filmDetailReducer,
  reviews: filmReviewsReducer,
  favorites: toggleFavorite,
  restaurantList: restaurantListReducer,
  restaurantDetails: restaurantDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
