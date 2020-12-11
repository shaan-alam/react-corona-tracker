import React from "react";

const DataPanel = ({ title, data }) => {
  return (
    <div className="datapanel">
      <div className="icon">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
      </div>
      <div className="data">
        <h3>{title}</h3>
        <h2>{data}</h2>
      </div>
    </div>
  );
};

export default function DataPanels() {
  return (
    <div className="datapanels_wrapper">
      <DataPanel title="Cases" data={45789746} />
      <DataPanel title="Recovered" data={45789746} />
      <DataPanel title="Deaths" data={45789746} />
    </div>
  );
}
