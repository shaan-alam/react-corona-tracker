import { combineReducers } from "redux";
import isLoading from "./isLoading";
import countries from "./countries";

export default combineReducers({
  isLoading,
  countries,
});
