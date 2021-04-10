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
        padding: { left: 100, right: 100 },
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

// export default ChartStats

// import { Component } from 'react'
// import Chart from 'react-apexcharts'
// import './ChartStats.scss'

// export class ChartStats extends Component {
//         constructor(props) {
//           super(props);

//           this.state = {

//             options: {
//               chart: {
//                 id: 'apexchart-example',
//                 stacked: false,
//               },
//               dataLabels: {
//                 enabled: false
//               },
//               colors: ['#546E7A'],
//               stroke: {
//                 curve: 'straight',
//                 width:1
//               },
//               fill: {
//                 type: 'gradient',
//                 gradient: {
//                   shadeIntensity: 1,
//                   inverseColors: false,
//                   opacityFrom: 0.5,
//                   opacityTo: 0,
//                   stops: [0, 90, 100]
//                 },
//               },
//               xaxis: {
//                 // categories: this.props.categories,
//                 type: 'category',
//                 labels:{
//                     rotate: -25,
//                 },
//               }
//             },
//             series: [{
//               name: 'series-1',
//               data: this.props.data
//             }]
//           }
//         }
//         render() {
//           return (
//             <div className="chart-stats">
//               <h3>{this.props.title}</h3>
//               <Chart className="chart-stats" options={this.state.options} series={this.state.series} type='area' width="100%" height={320} />
//             </div>
//           )
//         }
//       }
