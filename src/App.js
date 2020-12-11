import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";

import { connect } from "react-redux";
import { getCountries } from "./Redux/actions/ActionCreators";

function App({ getCountries }) {
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
    </div>
  );
}

export default connect(null, { getCountries })(App);
