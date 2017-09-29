import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const demoData = [
    {date: 'Sep 1', time: 23},
    {date: 'Sep 2', time: 18},
    {date: 'Sep 3', time: 45},
    {date: 'Sep 4', time: 28},
    {date: 'Sep 5', time: 0},
    {date: 'Sep 6', time: 33},
    {date: 'Sep 7', time: 25},
    {date: 'Sep 8', time: 23},
    {date: 'Sep 9', time: 18},
    {date: 'Sep 10', time: 45},
    {date: 'Sep 11', time: 28},
    {date: 'Sep 12', time: 0},
    {date: 'Sep 13', time: 33},
    {date: 'Sep 14', time: 25}
];

const data = {
    labels:[],
    datasets:[{
        label: 'Time Per Day',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,255,0,0.4)',
        borderColor: 'rgba(255,255,0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,255,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
    }]
};


export default class DailyChart extends Component{
    constructor(props){
        super(props);

    }
    render () {
        console.log(this.props.graphData);
        return (
            <div>
                <Line
                    data={this.props.graphData}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>

        );
    }
}