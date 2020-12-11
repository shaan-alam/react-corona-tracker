import { combineReducers } from "redux";
import isLoading from "./isLoading";
import countries from "./countries";
import countryData from "./countryData";
import historicalData from "./historicalData";

export default combineReducers({
  isLoading,
  countries,
  countryData,
  historicalData,
});
