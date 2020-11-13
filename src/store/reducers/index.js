import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  country: countryReducer,
  news: newsReducer,
});
