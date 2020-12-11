import { combineReducers } from "redux";
import isLoading from "./isLoading";
import countries from "./countries";
import countryData from "./countryData";

export default combineReducers({
  isLoading,
  countries,
  countryData,
});
