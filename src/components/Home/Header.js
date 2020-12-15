import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import { connect } from "react-redux";
import {
  getCountryData,
  getHistoricalData,
} from "../../Redux/actions/ActionCreators";

function Header({
  isLoading,
  getCountryData,
  countries,
  getHistoricalData,
  name,
}) {
  // selected country state
  const [selectedCountry, setSelectedCountry] = useState(name);

  // search selected country Data
  const searchCountryData = (country) => {
    // Get country data
    getCountryData(country);

    // Get country's historical data
    getHistoricalData(country);
  };

  return (
    <header>
      <h2>Corona Tracker</h2>
      <div className="actions">
        {isLoading && <Loader />}
        <Dropdown
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <button
          className="primary-btn"
          onClick={() => searchCountryData(selectedCountry)}
        >
          Go!
        </button>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    countries: state.countries,
    name: state.countryData.name,
  };
};

export default connect(mapStateToProps, { getCountryData, getHistoricalData })(
  Header
);
