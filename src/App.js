import React from "react";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Graph from "./components/Graph";
import TopAffectedCountries from "./components/TopAffectedCountries";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API: '',
      currentCountry: {
        name: "",
        data: [],
      },
      topAffectedCountries: [],
    };
  }

  componentDidMount() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(res => res.json())
      .then(res => {
        this.setState({ API: res });
        const country = this.getCountryAnalytics("India");
        this.setState({ currentCountry: { name: "India", data: country } });
        this.getTopAffectedCountries();
      });
      
      
  }

  getTopAffectedCountries = () => {
    const countries = Object.keys(this.state.API);

    let allCountryData = [],
      data,
      confirmed;

    countries.forEach(country => {
      data = this.getCountryAnalytics(country);
      confirmed = data[data.length - 1].confirmed;
      allCountryData.push({ name: country, confirmed: confirmed });
    });

    const topAffectedCountries = allCountryData
      .sort((a, b) => b.confirmed - a.confirmed)
      .slice(0, 10);

    this.setState({ topAffectedCountries });
  };

  
  onFormSubmit = e => {
    if (e.target.previousElementSibling.value !== "") {
      const { currentCountry } = this.state;

      currentCountry.name = e.target.previousElementSibling.value;
      currentCountry.data = this.getCountryAnalytics(currentCountry.name);

      this.setState({ currentCountry });
    } else {
      alert("empty box");
    }
  };

  getCountryAnalytics = countryName => {
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
      let monthData = country.filter(c => +c.date.split("-")[1] === i);

      let lastDateData = monthData[monthData.length - 1];
      lastDateData["month"] = monthNames[i];

      monthlyData.push(lastDateData);
    }

    return monthlyData;
  };

  render() {
    return (
      <main>
        <Nav navMenu={this.state.navMenu} toggleNavMenu={this.toggleNavMenu} />
        <Showcase onFormSubmit={this.onFormSubmit} />
        <Graph
          data={this.state.currentCountry.data}
          name={this.state.currentCountry.name}
        />
        <TopAffectedCountries
          topAffectedCountries={this.state.topAffectedCountries}
        />
        <Cards />
        <Footer />
      </main>
    );
  }
}

export default App;
