import React from "react";

export default function CountryData() {
  return (
    <div className="country_data">
      <div className="country_info">
        <h1>India's Info</h1>
        <ul>
          <li>
            <strong>Country Name</strong> - India
          </li>
          <li>
            <strong>Today's Cases</strong> - 174
          </li>
          <li>
            <strong>Today's Death</strong> - 13
          </li>
          <li>
            <strong>Today's Recovered</strong> - 117
          </li>
          <li>
            <strong>Active</strong> - 11714
          </li>
          <li>
            <strong>Critical</strong> - 1171
          </li>
        </ul>
      </div>
      <div className="country_icon">
        <img
          src="https://disease.sh/assets/img/flags/in.png"
          alt="Country Flag"
        />
      </div>
    </div>
  );
}
