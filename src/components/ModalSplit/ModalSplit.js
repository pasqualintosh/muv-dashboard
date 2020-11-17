import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

const data = {
    labels: [
        "Auto",
        "Moto",
        "",
        "A piedi",
        "Bicicletta",
        "",
        "TP (Autobus, tram, metro)",
        "Treno",
    ],
    datasets: [
        {
            label: '%',
            backgroundColor: '#3d3d3d',
            borderColor: '#3d3d3d',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
                31,
                12,
                0,
                10,
                7,
                0,
                27,
                13,
            ]
        }
    ]
};

export default class ModalSplit extends Component {
    render() {
        return (
            <div style={{}}>
                <h2>Split modale</h2>
                <Bar
                    data={data}
                    options={
                        {
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    }
                                }]
                            }
                        }}
                />
            </div>
        )
    }
}
