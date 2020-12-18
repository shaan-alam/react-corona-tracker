import {
  SET_IS_LOADING,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_HISTORICAL_DATA,
  GET_TOP_AFFECTED_COUNTRIES,
  SET_SELECTED_COUNTRY,
} from "./ActionTypes";
import axios from "axios";
import { getErrors } from "./ErrorActions";

// Set loading state
export const setLoading = (isLoading) => {
  return { type: SET_IS_LOADING, payload: isLoading };
};

// To set current country
export const setSelectedCountry = (country) => {
  return {
    type: SET_SELECTED_COUNTRY,
    payload: country,
  };
};

//  Get all the countries
export const getCountries = () => (dispatch) => {
  // First set loading to true
  dispatch(setLoading(true));

  axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then((res) => {
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data.map((item) => item.country),
      });

      // disable loading
      dispatch(setLoading(false));
    })
    .catch((err) => catchErrors(err, dispatch));
};

// To get some info about country
export const getCountryData = (country = "India") => (dispatch) => {
  // set loading to true
  dispatch(setLoading(true));

  axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then((res) => {
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
    })
    .catch((err) => catchErrors(err, dispatch));
};

// To get country's historical data
export const getHistoricalData = (country = "India") => (dispatch) => {
  // set loading to true
  dispatch(setLoading(true));

  axios
    .get(
      `https://disease.sh/v3/covid-19/historical/${encodeURI(
        country
      )}?lastdays=365`
    )
    .then(({ data }) => {
      const caseData = getMonthlyData(data.timeline.cases);
      const deathsData = getMonthlyData(data.timeline.deaths);
      const recoveredData = getMonthlyData(data.timeline.recovered);

      dispatch({
        type: GET_HISTORICAL_DATA,
        payload: { caseData, deathsData, recoveredData },
      });
      dispatch(setLoading(false));
    })
    .catch((err) => catchErrors(err, dispatch));
};

// Calculate each month's data for each case type
const getMonthlyData = (data) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let monthlyData = [];

  for (let i = 0; i < monthNames.length; i++) {
    let monthDays = Object.keys(data).filter(
      (date) => date.split("/")[0] == i + 1
    );
    let lastDateOfMonth = monthDays[monthDays.length - 1];

    let monthData = {
      month: monthNames[i],
      caseTypeData: data[lastDateOfMonth],
    };

    monthlyData.push(monthData);
  }

  return monthlyData;
};

// Get all the top affected countries
export const getTopAffectedCountries = (countries) => (dispatch) => {
  // set loading to true
  dispatch(setLoading(true));

  axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
    const sortedData = sortData(res.data).slice(0, 50);
    dispatch({ type: GET_TOP_AFFECTED_COUNTRIES, payload: sortedData });
    dispatch(setLoading(false));
  });
};

// sort the affected countries data
const sortData = (countries) => countries.sort((a, b) => b.cases - a.cases);

// To catch fetching data errors
const catchErrors = (err, dispatch) => {
  if (err.response) {
    dispatch(
      getErrors({
        id: "SOMETHING_WENT_WRONG",
        err: "Oops..Something went Wrong",
      })
    );
  } else if (err.request && !err.response) {
    dispatch(
      getErrors({
        id: "NETWORK_ERROR",
        err: "Network Error...Please try again!",
      })
    );
  }
};
