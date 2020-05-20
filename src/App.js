import React from "react";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Graph from "./components/Graph";
import TopAffectedCountries from "./components/TopAffectedCountries";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

import { Context, ContextProvider } from "./DataContext";

function App() {
  return (
    <main>
      <Nav />
      <ContextProvider>
        <Showcase />
        <Context.Consumer>
          {value => (
            <Graph
              data={value.state.currentCountry.data}
              name={value.state.currentCountry.name}
            />
          )}
        </Context.Consumer>
        <TopAffectedCountries />
      </ContextProvider>
      <Cards />
      <Footer />
    </main>
  );
}

export default App;
