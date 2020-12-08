import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";

export default function App() {
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
