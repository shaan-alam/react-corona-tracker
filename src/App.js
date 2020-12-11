import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import Loader from "./components/Loader";
import { connect } from "react-redux";
import {
  getCountries,
  getCountryData,
  getHistoricalData,
} from "./Redux/actions/ActionCreators";

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
          <Route path="/" component={Home} />
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
