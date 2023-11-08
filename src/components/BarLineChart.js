import React, { useEffect, useState } from "react";
import "../styles/BarLineChart.css";
import { AiOutlineDown } from "react-icons/ai";
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
  
const BarLineChart = ({ detail }) => {

  const [asiaCount, setAsiaCount] = useState(null)
  const [northAmericaCount, setNorthAmericaCount] = useState(null)
  const [southAmericaCount, setSouthAmericaCount] = useState(null)
  const [europeCount, setEuropeCount] = useState(null)
  const [africaCount, setAfricaCount] = useState(null)
  const [australiaCount, setAustraliaCount] = useState(null)
  
  useEffect(() => {
    countCases();
  }, []);

  const countCases = () => {
    let totalAsiaCases = 0;
    let totalNorthAmericaCases = 0;
    let totalSouthAmericaCases = 0;
    let totalEuropeCases = 0;
    let totalAfricaCases = 0;
    let totalAustraliaCases = 0;
    detail.map((detail) => {
      if (detail.continent === 'Asia') {
        totalAsiaCases += detail.cases;
      }
      if (detail.continent === 'North America') {
        totalNorthAmericaCases += detail.cases;
      }
      if (detail.continent === 'South America') {
        totalSouthAmericaCases += detail.cases;
      }
      if (detail.continent === 'Europe') {
        totalEuropeCases += detail.cases;
      }
      if (detail.continent === 'Africa') {
        totalAfricaCases += detail.cases;
      }
      if (detail.continent === 'Australia-Oceania') {
        totalAustraliaCases += detail.cases;
      }
    });
    setAsiaCount(totalAsiaCases)
    setNorthAmericaCount(totalNorthAmericaCases);
    setSouthAmericaCount(totalSouthAmericaCases)
    setEuropeCount(totalEuropeCases);
    setAfricaCount(totalAfricaCases);
    setAustraliaCount(totalAustraliaCases)
  };

    const [chartData, setChartData] = useState({
        datasets: [],
      });
      const [chartOptions, setChartOptions] = useState({});
      const labels = ['Asia', 'North America', 'South America', 'Europe', 'Africa', 'Australia Oceania'];

      useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    type: 'line',
                    label: 'User Sign up',
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#009BF2',
                    borderWidth: 2,
                    fill: false,
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    order: 1
                  },
                  {
                    type: 'bar',
                    label: 'COVID-19 Cases',
                    data: [asiaCount, northAmericaCount, southAmericaCount, europeCount, africaCount, australiaCount],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#FB4540',
                    order: 0,
                  }, 
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
      }, [])

  return (
    <div className="barchart">
      <div className="barchart-top">
        <div>
          <h2>User Traffic</h2>
        </div>
        <div className="bar-data-name">
          <ul>
            <li className="blueDot">&nbsp;&nbsp; &nbsp;&nbsp;</li>
            <li>User Sign up</li>
            <li className="blueDot redDot">&nbsp;&nbsp; &nbsp;&nbsp;</li>
            <li>User Subscribed</li>
          </ul>
          <div className="user-drop">
            <p>Current Year</p>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div>
      <Chart type='bar' data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarLineChart;
