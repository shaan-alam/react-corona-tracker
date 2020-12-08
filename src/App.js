import React from "react";
import LeftSidebar from "./components/Sidebar/";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

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
