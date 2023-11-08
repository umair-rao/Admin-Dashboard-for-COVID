import React, { useEffect, useState } from "react";
import "../styles/BarChart.css";
import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ detail }) => {

  const [asiaCaseCount, setAsiaCaseCount] = useState(null);
  const [northAmericaCaseCount, setNorthAmericaCaseCount] = useState(null);
  const [southAmericaCaseCount, setSouthAmericaCaseCount] = useState(null);
  const [europeCaseCount, setEuropeCaseCount] = useState(null);
  const [africaCaseCount, setAfricaCaseCount] = useState(null);
  const [australiaCaseCount, setAustraliaCaseCount] = useState(null);

  const [asiaDeathCount, setAsiaDeathCount] = useState(null);
  const [northAmericaDeathCount, setNorthAmericaDeathCount] = useState(null);
  const [southAmericaDeathCount, setSouthAmericaDeathCount] = useState(null);
  const [europeDeathCount, setEuropeDeathCount] = useState(null);
  const [africaDeathCount, setAfricaDeathCount] = useState(null);
  const [australiaDeathCount, setAustraliaDeathCount] = useState(null);

  useEffect(() => {
    countCases();
    console.log(africaCaseCount);
  }, [detail]);

  const countCases = () => {
    let totalAsiaCases = 0;
    let totalNorthAmericaCases = 0;
    let totalSouthAmericaCases = 0;
    let totalEuropeCases = 0;
    let totalAfricaCases = 0;
    let totalAustraliaCases = 0;

    let totalAsiaDeathCases = 0;
    let totalNorthAmericaDeathCases = 0;
    let totalSouthAmericaDeathCases = 0;
    let totalEuropeDeathCases = 0;
    let totalAfricaDeathCases = 0;
    let totalAustraliaDeathCases = 0;

    detail.map((detail) => {
      if (detail.continent === 'Asia') {
        totalAsiaCases += detail.activePerOneMillion;
        totalAsiaDeathCases += detail.recoveredPerOneMillion;
      }
      if (detail.continent === 'North America') {
        totalNorthAmericaCases += detail.recoveredPerOneMillion;
        totalNorthAmericaDeathCases += detail.recoveredPerOneMillion;
      }
      if (detail.continent === 'South America') {
        totalSouthAmericaCases += detail.recoveredPerOneMillion;
        totalSouthAmericaDeathCases += detail.recoveredPerOneMillion;
      }
      if (detail.continent === 'Europe') {
        totalEuropeCases += detail.recoveredPerOneMillion;
        totalEuropeDeathCases += detail.recoveredPerOneMillion;
      }
      if (detail.continent === 'Africa') {
        totalAfricaCases += detail.recoveredPerOneMillion;
        totalAfricaDeathCases += detail.recoveredPerOneMillion;
      }
      if (detail.continent === 'Australia-Oceania') {
        totalAustraliaCases += detail.recoveredPerOneMillion;
        totalAustraliaDeathCases += detail.recoveredPerOneMillion;
      }
    });

    setAsiaCaseCount(totalAsiaCases);
    setNorthAmericaCaseCount(totalNorthAmericaCases);
    setSouthAmericaCaseCount(totalSouthAmericaCases);
    setEuropeCaseCount(totalEuropeCases);
    setAfricaCaseCount(totalAfricaCases);
    setAustraliaCaseCount(totalAustraliaCases);

    setAsiaDeathCount(totalAsiaDeathCases);
    setNorthAmericaDeathCount(totalNorthAmericaDeathCases);
    setSouthAmericaDeathCount(totalSouthAmericaDeathCases);
    setEuropeDeathCount(totalEuropeDeathCases);
    setAfricaDeathCount(totalAfricaDeathCases);
    setAustraliaDeathCount(totalAustraliaDeathCases);
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
          label: "Cases per one million",
          backgroundColor: "#00F2DE",
          borderWidth: 2,
          fill: false,
          data: [asiaCaseCount, northAmericaCaseCount, southAmericaCaseCount, europeCaseCount, africaCaseCount, australiaCaseCount],
          order: 0,
        },
        {
          label: "Deaths per one million",
          data: [asiaDeathCount, northAmericaDeathCount, southAmericaDeathCount, europeDeathCount, africaDeathCount, australiaDeathCount],
          backgroundColor: "#FB4540",
          order: 1,
        },
      ],
    });
    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Cases vs Deaths",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    });
  }, [asiaCaseCount, northAmericaCaseCount, southAmericaCaseCount, europeCaseCount, africaCaseCount, australiaCaseCount, asiaDeathCount, northAmericaDeathCount, southAmericaDeathCount, europeDeathCount, africaDeathCount, australiaDeathCount]);

  return (
    <div className="BarChart">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
