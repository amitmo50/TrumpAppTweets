import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';

const Chart = ({tweets, title, labels, value, index, graphTitle}) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: graphTitle,
            backgroundColor: 'rgba(0,161,255,0.2)',
            borderColor: 'rgba(0,40,219,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,40,219,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: tweets
          }
        ]
      };
    return (
        <div className="chart-container" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
         {value === index && (
             <>
                <h2 className="chart-title">{title}</h2>
                <Bar 
                data={data}
                />
            </>
         )}
        </div>
    )
}

export default Chart;