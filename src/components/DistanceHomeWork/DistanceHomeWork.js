import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
    labels: [
        'meno di 3km',
        'tra 7 e 5km',
        'tra 7 e 12km',
        'più di 12km',
    ],
    datasets: [
        {
            label: '%',
            backgroundColor: '#DCBF52',
            borderColor: '#DCBF52',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
                8,
                24,
                24,
                43,
            ]
        }
    ]
};

export default class TransportTool extends Component {
    render() {
        return (
            <div style={{}}>
                <h2>Distanza casa lavoro</h2>
                <HorizontalBar
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
        );
    }
}
