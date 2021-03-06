import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  restaurantDetailsReducer,
  restaurantListReducer,
} from "../reducers/restaurantReducers";

const reducer = combineReducers({
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
