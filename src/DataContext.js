import React from "react";
import API from "./assets/js/API.json";

export const Context = React.createContext();

export class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API: [],
      currentCountry: {
        name: "",
        data: [],
      },
      topAffectedCountries: [],
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ API: res });
        const country = this.getCountryAnalytics("India");
        this.setState({ currentCountry: { name: "India", data: country } });
        this.getTopAffectedCountries();
      });
  }

  getTopAffectedCountries = () => {
    const countries = Object.keys(API);

    let allCountryData = [],
      data,
      confirmed;

    countries.forEach((country) => {
      data = this.getCountryAnalytics(country);
      confirmed = data[data.length - 1].confirmed;
      allCountryData.push({ name: country, confirmed: confirmed });
    });

    const topAffectedCountries = allCountryData
      .sort((a, b) => b.confirmed - a.confirmed)
      .slice(0, 10);

    this.setState({ topAffectedCountries });
  };

  onFormSubmit = (e) => {
    if (e.target.previousElementSibling.value !== "") {
      const { currentCountry } = this.state;

      currentCountry.name = e.target.previousElementSibling.value;
      currentCountry.data = this.getCountryAnalytics(currentCountry.name);

      this.setState({ currentCountry });
    } else {
      alert("empty box");
    }
  };

  getCountryAnalytics = (countryName) => {
    const monthNames = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const { [countryName]: country } = this.state.API;

    let monthlyData = [];

    for (let i = 1; i <= new Date().getMonth() + 1; i++) {
      let monthData = country.filter((c) => +c.date.split("-")[1] === i);

      let lastDateData = monthData[monthData.length - 1];
      lastDateData["month"] = monthNames[i];

      monthlyData.push(lastDateData);
    }

    return monthlyData;
  };

  render() {
    let value = {
      state: this.state,
      getCountryAnalytics: this.getCountryAnalytics,
      onFormSubmit: this.onFormSubmit,
      getTopAffectedCountries: this.getTopAffectedCountries,
    };

    console.log(value);
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
