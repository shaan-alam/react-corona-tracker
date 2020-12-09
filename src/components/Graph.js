import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#ff1f2d",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#ff1f2d",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#ff1f2d",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#ff1f2d",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [45, 68, 98, 78, 12, 0, 0.15, 56, 78],
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#ff1f2d",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#ff1f2d",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [165, 90, 45, 81, 45, 51, 42],
    },
  ],
};

export default function Graph() {
  return (
    <div className="graph_container">
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: `India's  data`,
            fontSize: 25,
          },
        }}
      />
    </div>
  );
}
