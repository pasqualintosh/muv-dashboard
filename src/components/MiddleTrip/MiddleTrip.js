import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: [
        "Solo all'andata",
        "Solo al ritorno",
        "All'andata e al ritorno",
        "Nessuna"
    ],
    datasets: [
        {
            data: [
                10.4,
                8.0,
                12.8,
                68.8,
            ],
            backgroundColor: ["#ACC3C1", "#E05F39", "#EBB256", "#4C84AB"],
            hoverBackgroundColor: ["#ACC3C1", "#E05F39", "#EBB256", "#4C84AB"],
        },
    ],
};

class DoughnutGraph extends Component {
    render() {
        return <Doughnut data={data} />;
    }
}

export default DoughnutGraph;
