import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import * as monthRoute from "./../../data/month_route.json";

console.log(monthRoute.default);

let data = [];
// monthRoute.default.forEach((e, i) => {
//   console.log(e);
//   console.log(i);
// });

const initialState = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Routes travaled in 2019",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [
        2071,
        1877,
        2677,
        2412,
        4770,
        7336,
        5412,
        3526,
        5535,
        8206,
        6058,
        3912,
      ],
    },
  ],
};

class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  render() {
    return <Bar data={this.state} />;
  }
}

export default BarGraph;
