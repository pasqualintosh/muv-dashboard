import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
    labels: [
        'automobile',
        'abbonamento mezzi di trasporto pubblico',
        'bicicletta',
        'scooter/motocicletta',
        'app per servizi a chiamata',
        'abbonamento treno',
        'abbonamento car sharing',
        'abbonamento bike sharing',
        'bicicletta elettrica',
        'monopattino',
        'abbonamento moto sharing',
        'abbonamento scooter sharing',
        'abbonamento strisce blu',
        'nessuno dei precedenti',
    ],
    datasets: [
        {
            label: '%',
            backgroundColor: '#6581B4',
            borderColor: '#6581B4',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [
                83,
                32,
                30,
                26,
                12,
                10,
                8,
                6,
                6,
                4,
                3,
                2,
                2,
                2
            ]
        }
    ]
};

export default class TransportTool extends Component {
    render() {
        return (
            <div style={{}}>
                <h2>Mezzi di trasporto e servizi</h2>
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
