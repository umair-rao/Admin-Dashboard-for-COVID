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

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: "User Sign up",
          backgroundColor: "#00F2DE",
          borderWidth: 2,
          fill: false,
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        },
        {
          label: "User Dashboard",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          backgroundColor: "#FB4540",
        },
      ],
    });
    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked",
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
  }, []);

  return (
    <div className="BarChart">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
