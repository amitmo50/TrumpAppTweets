import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import './Chart.css';


const HorizBar = ({value, index, title, tweetByHour}) => {
    const data = {
        labels: Object.keys(tweetByHour),
        datasets: [
          {
            label: 'Amount of Tweets on Each Hour of The Day',
            backgroundColor: 'rgba(0,161,255,0.2)',
            borderColor: 'rgba(0,40,219,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,40,219,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: Object.values(tweetByHour)
          }
        ]
    };

    return (
      <div className="chart-container" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
       {value === index && (
            <>
                <h2 className="chart-title">{title}</h2>
                <HorizontalBar data={data} />
            </>
       )}
      </div>
    );
}

export default HorizBar;