import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { motion } from "framer-motion";

export default function Map() {
  const [countries, setCountries] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: 77,
    width: "88vw",
    height: "100vh",
    zoom: 1,
  });
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // fetching data
    const fetchData = () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((res) => setCountries(res));
    };

    fetchData();

    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <motion.div
      className="map_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/shaanalam/ckili38cz0c1f18se6ym09vrf"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {countries.map((data) => (
          <Marker
            key={data.country}
            latitude={data.countryInfo.lat}
            longitude={data.countryInfo.long}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(data);
              }}
            >
              <div className="circle"></div>
            </button>
          </Marker>
        ))}
        {selectedCountry && (
          <Popup
            className="popup_wrapper"
            latitude={selectedCountry.countryInfo.lat}
            longitude={selectedCountry.countryInfo.long}
            onClose={() => setSelectedCountry(null)}
          >
            <div className="popup">
              <h4>{selectedCountry.country}</h4>
              <img src={selectedCountry.countryInfo.flag} alt="" />
              <ul>
                <li>Cases - {selectedCountry.cases}</li>
                <li>Deaths - {selectedCountry.deaths}</li>
                <li>Recovered - {selectedCountry.recovered}</li>
              </ul>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </motion.div>
  );
}
