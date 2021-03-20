import React from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';

const LineChart = ({value, index, dataToGraph, title}) => {
    const years = Object.keys(dataToGraph);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: years.map(year => 
            (
            {
                label: `Amount Of Favorit Tweets in ${year}`,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,161,255,0.2)',
                borderColor: `rgba(${Math.random()*255 + 1},${Math.random()*255 + 1},${Math.random()*255 + 1},${Math.random()})`,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,161,255,0.2)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(0,161,255,0.2)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 12,
                gridLines: 'rgba(0,161,255,0.2)',
                data: Object.values(dataToGraph[year])
            }
          ))
        
    };

    return (
      <div className="chart-container" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
       {value === index && (
        <>
            <h2 className="chart-title">{title}</h2>
            <Line data={data} />
        </>
       )}
      </div>
    );
};

export default LineChart;