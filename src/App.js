import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import LeftSidebar from "./components/LeftSidebar";
import { connect } from "react-redux";
import {
  getCountries,
  getCountryData,
  getHistoricalData,
} from "./Redux/actions/ActionCreators";
import Map from "./components/Map";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App({ isLoading, getCountries, getCountryData, getHistoricalData }) {
  const location = useLocation();

  useEffect(() => {
    getCountries();
    getCountryData();
    getHistoricalData();
  }, []);

  return (
    <>
      <div className="App">
        <div className="App__left">
          <LeftSidebar />
        </div>
        <div className="App__right">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route path="/" component={Home} exact />
              <Route path="/map" component={Map} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {
  getCountries,
  getCountryData,
  getHistoricalData,
})(App);

// <Route path="/map" component={Map} />
