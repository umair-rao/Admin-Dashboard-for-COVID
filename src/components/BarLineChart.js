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

  const [asiaCount, setAsiaCount] = useState(null);
  const [northAmericaCount, setNorthAmericaCount] = useState(null);
  const [southAmericaCount, setSouthAmericaCount] = useState(null);
  const [europeCount, setEuropeCount] = useState(null);
  const [africaCount, setAfricaCount] = useState(null);
  const [australiaCount, setAustraliaCount] = useState(null);

  const [asiaRecoveredCount, setAsiaRecoveredCount] = useState(null);
  const [northAmericaRecoveredCount, setNorthAmericaRecoveredCount] = useState(null);
  const [southAmericaRecoveredCount, setSouthAmericaRecoveredCount] = useState(null);
  const [europeRecoveredCount, setEuropeRecoveredCount] = useState(null);
  const [africaRecoveredCount, setAfricaRecoveredCount] = useState(null);
  const [australiaRecoveredCount, setAustraliaRecoveredCount] = useState(null);

  useEffect(() => {
    countCases();
  }, [detail]);

  const countCases = () => {
    let totalAsiaCases = 0;
    let totalNorthAmericaCases = 0;
    let totalSouthAmericaCases = 0;
    let totalEuropeCases = 0;
    let totalAfricaCases = 0;
    let totalAustraliaCases = 0;

    let totalAsiaRecoveredCases = 0;
    let totalNorthAmericaRecoveredCases = 0;
    let totalSouthAmericaRecoveredCases = 0;
    let totalEuropeRecoveredCases = 0;
    let totalAfricaRecoveredCases = 0;
    let totalAustraliaRecoveredCases = 0;

    detail.forEach((item) => {
      if (item.continent === 'Asia') {
        totalAsiaCases += item.cases;
        totalAsiaRecoveredCases += item.recovered;
      } else if (item.continent === 'North America') {
        totalNorthAmericaCases += item.cases;
        totalNorthAmericaRecoveredCases += item.recovered;
      } else if (item.continent === 'South America') {
        totalSouthAmericaCases += item.cases;
        totalSouthAmericaRecoveredCases += item.recovered;
      } else if (item.continent === 'Europe') {
        totalEuropeCases += item.cases;
        totalEuropeRecoveredCases += item.recovered;
      } else if (item.continent === 'Africa') {
        totalAfricaCases += item.cases;
        totalAfricaRecoveredCases += item.recovered;
      } else if (item.continent === 'Australia-Oceania') {
        totalAustraliaCases += item.cases;
        totalAustraliaRecoveredCases += item.recovered;
      }
    });

    setAsiaCount(totalAsiaCases);
    setNorthAmericaCount(totalNorthAmericaCases);
    setSouthAmericaCount(totalSouthAmericaCases);
    setEuropeCount(totalEuropeCases);
    setAfricaCount(totalAfricaCases);
    setAustraliaCount(totalAustraliaCases);

    setAsiaRecoveredCount(totalAsiaRecoveredCases);
    setNorthAmericaRecoveredCount(totalNorthAmericaRecoveredCases);
    setSouthAmericaRecoveredCount(totalSouthAmericaRecoveredCases);
    setEuropeRecoveredCount(totalEuropeRecoveredCases);
    setAfricaRecoveredCount(totalAfricaRecoveredCases);
    setAustraliaRecoveredCount(totalAustraliaRecoveredCases);
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
          label: 'COVID-19 Recovered',
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: '#009BF2',
          borderWidth: 2,
          fill: false,
          data: [asiaRecoveredCount, northAmericaRecoveredCount, southAmericaRecoveredCount, europeRecoveredCount, africaRecoveredCount, australiaRecoveredCount],
          order: 0,
        },
        {
          type: 'bar',
          label: 'COVID-19 Cases',
          data: [asiaCount, northAmericaCount, southAmericaCount, europeCount, africaCount, australiaCount],
          backgroundColor: '#FB4540',
          order: 1,
        },
      ]
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Real Time COVID-19 Data'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, [asiaCount, northAmericaCount, southAmericaCount, europeCount, africaCount, australiaCount, asiaRecoveredCount, northAmericaRecoveredCount, southAmericaRecoveredCount, europeRecoveredCount, africaRecoveredCount, australiaRecoveredCount]);


  return (
    <div className="barchart">
      <div className="barchart-top">
        <div>
          <h2>COVID-19 Data</h2>
        </div>
        <div className="bar-data-name">
          <ul>
            <li className="blueDot">&nbsp;&nbsp; &nbsp;&nbsp;</li>
            <li>COVID-19 Recovered</li>
            <li className="blueDot redDot">&nbsp;&nbsp; &nbsp;&nbsp;</li>
            <li>COVID-19 Cases</li>
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
