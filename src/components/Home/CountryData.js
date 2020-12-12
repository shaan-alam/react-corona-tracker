import React from "react";
import { connect } from "react-redux";

function CountryData({
  name,
  todayCases,
  todayDeaths,
  todayRecovered,
  active,
  critical,
  flag,
}) {
  return (
    <div className="country_data">
      <div className="country_info">
        <h1>India's Info</h1>
        <ul>
          <li>
            <strong>Country Name</strong> - {name}
          </li>
          <li>
            <strong>Today's Cases</strong> - {todayCases}
          </li>
          <li>
            <strong>Today's Death</strong> - {todayDeaths}
          </li>
          <li>
            <strong>Today's Recovered</strong> - {todayRecovered}
          </li>
          <li>
            <strong>Active</strong> - {active}
          </li>
          <li>
            <strong>Critical</strong> - {critical}
          </li>
        </ul>
      </div>
      <div className="country_icon">
        <img src={flag} alt="Country Flag" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.countryData.name,
    todayCases: state.countryData.todayCases,
    todayDeaths: state.countryData.todayDeaths,
    todayRecovered: state.countryData.todayRecovered,
    active: state.countryData.active,
    critical: state.countryData.critical,
    flag: state.countryData.flag,
  };
};

export default connect(mapStateToProps)(CountryData);
