import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

function TopAffectedCountry({ topAffectedCountries }) {
  return (
    <motion.div
      className="top_affected_countries"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="countries">
        {topAffectedCountries.map((data, index) => (
          <div className="country" key={data.country}>
            <div className="country_img">
              <img src={data.countryInfo.flag} alt="" />
            </div>
            <div className="country_info">
              <h6>#{index + 1}</h6>
              <h3>{data.country}</h3>
              <h6>Cases: {data.cases}</h6>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return {
    topAffectedCountries: state.topAffectedCountries,
  };
};

export default connect(mapStateToProps)(TopAffectedCountry);
