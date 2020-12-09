import React from "react";
import DataPanels from "./DataPanels";
import Header from "./Header";
import CountryData from "./CountryData";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <DataPanels />
      <CountryData />
    </div>
  );
}
