import React from "react";
import CardsInfo from "./CardsInfo";
import { Line } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { title: "Confirmed", value: 1000 },
        { title: "Deaths", value: 1000 },
        { title: "Recovered", value: 1000 },
      ],
      currentCountryData: {},
    };
   
  }

  static getDerivedStateFromProps(props) {
    let cards = [];
    const data = props.data[props.data.length - 1];

    if (data) {
      cards = [
        { title: "Confirmed", value: data.confirmed },
        { title: "Deaths", value: data.deaths },
        { title: "Recovered", value: data.recovered },
      ];
    }

    return {
      data: {
        labels: props.data.map(obj => obj.month),
        datasets: [
          {
            label: "Confirmed",
            data: props.data.map(obj => obj.confirmed),
            backgroundColor: "rgba(252, 133, 163, 0.5)",
          },
          {
            label: "Deaths",
            data: props.data.map(obj => obj.deaths),
            backgroundColor: "rgba(226, 36, 49, 0.7)",
          },
          {
            label: "Recovered",
            data: props.data.map(obj => obj.recovered),
            backgroundColor: "rgba(255, 76, 133, 0.7)",
          },
        ],
      },
      cards: cards,
    };
  }

  render() {
    return (
      <section id="graph-section" className="graph-section">
        <div className="container">
          <CardsInfo cards={this.state.cards} />
        </div>
        <div className="chart-container">
          <Line
            data={this.state.data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              title: {
                display: true,
                text: `${this.props.name}`,
                fontSize: 25,
              },
            }}
          />
        </div>
      </section>
    );
  }
}

export default Graph;
