import React from "react";
import DataPanels from "./DataPanels";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <DataPanels />
    </div>
  );
}
