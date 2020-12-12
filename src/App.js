import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LeftSidebar from "./components/LeftSidebar";
import { connect } from "react-redux";
import {
  getCountries,
  getCountryData,
  getHistoricalData,
} from "./Redux/actions/ActionCreators";
import Map from "./components/Map";

function App({ isLoading, getCountries, getCountryData, getHistoricalData }) {
  useEffect(() => {
    getCountries();
    getCountryData("India");
    getHistoricalData("India");
  }, []);

  return (
    <div className="App">
      <div className="App__left">
        <LeftSidebar />
      </div>
      <div className="App__right">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/map" component={Map} />
        </Switch>
      </div>
    </div>
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
