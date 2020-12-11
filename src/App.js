import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import Loader from "./components/Loader";
import { connect } from "react-redux";
import { getCountries } from "./Redux/actions/ActionCreators";

function App({ isLoading, getCountries }) {
  useEffect(() => {
    getCountries();
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
      {isLoading && <Loader />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { getCountries })(App);
