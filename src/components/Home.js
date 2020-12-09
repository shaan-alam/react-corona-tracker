import React from "react";
import DataPanels from "./DataPanels";
import Header from "./Header";
import CountryData from "./CountryData";
import Graph from "./Graph";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <DataPanels />
      <CountryData />
      <Graph />
    </div>
  );
}
