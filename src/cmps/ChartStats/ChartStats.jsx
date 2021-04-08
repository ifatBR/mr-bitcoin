
import { Component } from 'react'
import Chart from 'react-apexcharts'
import './ChartStats.scss'

export class ChartStats extends Component {
        constructor(props) {
          super(props);
       
          this.state = {
            
            options: {
              chart: {
                id: 'apexchart-example',
                stacked: false,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#546E7A'],
              stroke: {
                curve: 'straight',
                width:1
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              xaxis: {
                // categories: this.props.categories,
                type: 'category',
                labels:{
                    rotate: -25,
                },
              }
            },
            series: [{
              name: 'series-1',
              data: this.props.data
            }]
          }
        }
        render() {
          return (
            <div className="chart-stats">
              <h3>{this.props.title}</h3>
              <Chart className="chart-stats" options={this.state.options} series={this.state.series} type='area' width="100%" height={320} />
            </div>
          )
        }
      }