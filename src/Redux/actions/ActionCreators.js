import { SET_IS_LOADING, GET_COUNTRIES } from "./ActionTypes";
import axios from "axios";

// Set loading state
export const setLoading = (isLoading) => {
  return { type: SET_IS_LOADING, payload: isLoading };
};

//  Get all the countries
export const getCountries = () => (dispatch) => {
  // First set loading to true
  dispatch(setLoading(true));

  axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data.map((item) => item.country),
    });

    // disable loading
    dispatch(setLoading(false));
  });
};
