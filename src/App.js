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
import Footer from "./components/Footer";
import { getTopAffectedCountries } from "./Redux/actions/ActionCreators";
import TopAffectedCountry from "./components/TopAffectedCountry";

function App({
  getCountries,
  getCountryData,
  getHistoricalData,
  getTopAffectedCountries,
}) {
  const location = useLocation();

  useEffect(() => {
    getCountries();
    getCountryData();
    getHistoricalData();
    getTopAffectedCountries();
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
              <Route path="/countries" component={TopAffectedCountry} />
            </Switch>
          </AnimatePresence>
          <Footer />
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
  getTopAffectedCountries,
})(App);
