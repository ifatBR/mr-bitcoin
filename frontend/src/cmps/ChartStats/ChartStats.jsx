import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartStats.scss'
const options = {
    elements: {
        point: {
            radius: 1.5,
        },
        line: {
            borderWidth: 2,
        },
    },
    layout: {
        padding: { left: 50, right: 50 },
    },
    legend: {
        display: false,
    },

    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export function ChartStats(props) {
    const data = {
        labels: props.data.map(({ x }) => x),
        datasets: [
            {
                data: props.data.map(({ y }) => y),
                fill: true,
                backgroundColor: '#546e7a22',
                borderColor: '#546E7A',
            },
        ],
    };

    return (
        <div className="chart-stats">
            <div className="header">
                <h2 className="title">{props.title}</h2>
            </div>
            <Line data={data} options={options} height={70} />
        </div>
    );
}
