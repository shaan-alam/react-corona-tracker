import {
  SET_IS_LOADING,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_HISTORICAL_DATA,
} from "./ActionTypes";
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

// To get some info about country
export const getCountryData = (country) => (dispatch) => {
  // set loading to true
  dispatch(setLoading(true));

  axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
    const filteredCountry = res.data.filter(
      (data) => data.country.toLowerCase() === country.toLowerCase()
    )[0];

    const simpleData = {
      name: filteredCountry.country,
      todayCases: filteredCountry.todayCases,
      todayDeaths: filteredCountry.todayDeaths,
      todayRecovered: filteredCountry.todayRecovered,
      active: filteredCountry.active,
      critical: filteredCountry.critical,
      cases: filteredCountry.cases,
      deaths: filteredCountry.deaths,
      recovered: filteredCountry.recovered,
      flag: filteredCountry.countryInfo.flag,
    };
    dispatch({ type: GET_COUNTRY_DATA, payload: simpleData });
    dispatch(setLoading(false));
  });
};
