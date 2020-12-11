import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { connect } from "react-redux";

function Header({ countries }) {
  // selected country state
  const [selectedCountry, setSelectedCountry] = useState("India");

  return (
    <header>
      <h2>Corona Tracker</h2>
      <div className="actions">
        <Dropdown
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <button className="primary-btn">Go!</button>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(Header);
