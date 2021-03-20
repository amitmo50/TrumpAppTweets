import React, { useEffect, useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chart from './Chart/Chart';
import LineChart from './Chart/LineChart';
import HorizBar from './Chart/HorizontalBar';
import axios from 'axios';
import Loading from '../assets/gif/loading.gif';

const App = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [yearDataToGraph, setYearDataToGraph] = useState({});
  const [monthDataToGraph, setMonthDataToGraph] = useState({});
  const [favoriteTweets, setFavoriteTweets] = useState({});
  const [tweetByHour, setTweetsByHour] = useState({});

  useEffect(() => {
    axios.get('/api/getSortData')
    .then(res => {
      setData(res.data);
      setIsDataLoading(false);
    });
  }, []);

  useEffect(() => {
    const dataYearInfo = {
      "2014": 0,
      "2015": 0,
      "2016": 0,
      "2017": 0,
      "2018": 0,
      "2019": 0,
      "2020": 0,
      "2021": 0,
    }

    const dataFavoritInfo = {
      "2014": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2015": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2016": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2017": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2018": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2019": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2020": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
      "2021": {
        "Jan": 0,
        "Feb": 0,
        "Mar": 0,
        "Apr": 0,
        "May": 0,
        "Jun": 0,
        "Jul": 0,
        "Aug": 0,
        "Sep": 0,
        "Oct": 0,
        "Nov": 0,
        "Dec": 0,
      },
    }

    const dataMonthInfo = {
      "Jan": 0,
      "Feb": 0,
      "Mar": 0,
      "Apr": 0,
      "May": 0,
      "Jun": 0,
      "Jul": 0,
      "Aug": 0,
      "Sep": 0,
      "Oct": 0,
      "Nov": 0,
      "Dec": 0,
    }
    const dataByhour = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
    }
    data.forEach(item => {
      let time = new Date(item.date.split(" ")[0]);
      dataYearInfo[item.date.split(" ")[0].split("-")[0]]++;
      if(isNaN(dataYearInfo[item.date.split(" ")[0].split("-")[0]])){
        delete dataYearInfo[item.date.split(" ")[0].split("-")[0]];
      } 
      if(dataFavoritInfo[item.date.split(" ")[0].split("-")[0]] !== undefined){
        dataFavoritInfo[item.date.split(" ")[0].split("-")[0]][time.toLocaleString('en-us', {month: 'short'})] += Number(item.favorites);
      }
      dataMonthInfo[time.toLocaleString('en-us', {month: 'short'})]++;
      dataByhour[Number(item.date.split(" ")[1].split(":")[0])]++;
    });
    setTweetsByHour(dataByhour);
    setMonthDataToGraph(dataMonthInfo);
    setFavoriteTweets(dataFavoritInfo);
    setYearDataToGraph(dataYearInfo);
  }, [data]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1 className="header">Trump Tweets</h1>
      {
        isDataLoading ? 
        (<img style={{width: "40%"}} src={Loading} alt="loading.."/>) :
        (
          <>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Tweets over Years" aria-controls="tabpanel-0" id="tab-0"/>
              <Tab label="Tweets over Month" aria-controls="tabpanel-1" id="tab-1"/>
              <Tab label="Favorites Over Time" aria-controls="tabpanel-2" id="tab-2"/>
              <Tab label="Tweets Over Hour" aria-controls="tabpanel-3" id="tab-3"/>
            </Tabs>
          </AppBar>
            <Chart title="All Tweets over Years 2014-2021" graphTitle="Amount Of Tweets" tweets={Object.values(yearDataToGraph)} labels={Object.keys(yearDataToGraph)} value={value} index={0}/>   
            <Chart title="All Tweets Between 2014-2021 over Months" graphTitle="Amount Of Tweets" tweets={Object.values(monthDataToGraph)} labels={Object.keys(monthDataToGraph)} value={value} index={1}/>
            <LineChart title="Favorites Over Time" dataToGraph={favoriteTweets} value={value} index={2}/>
            <HorizBar tweetByHour={tweetByHour} title="All Tweets over Years 2014-2021 in Each Hour" value={value} index={3}/>
          </>
          )
      }
      
    </div>
  );
}

export default App;
