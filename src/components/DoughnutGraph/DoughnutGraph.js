import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Walk", "Bike", "Bus"],
  datasets: [
    {
      data: [31572, 14843, 2238],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

class DoughnutGraph extends Component {
  render() {
    return <Doughnut data={data} />;
  }
}

export default DoughnutGraph;
