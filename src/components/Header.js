import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import { connect } from "react-redux";
import { getCountryData } from "../Redux/actions/ActionCreators";

function Header({ isLoading, getCountryData, countries }) {
  // selected country state
  const [selectedCountry, setSelectedCountry] = useState("India");

  // search selected country Data
  const searchCountryData = (country) => {
    getCountryData(country);
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
  };
};

export default connect(mapStateToProps, { getCountryData })(Header);
