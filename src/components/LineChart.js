import React, { useEffect, useState } from 'react'
import '../styles/LineChart.css'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ detail }) => {
  const [casesCount, setCasesCount] = useState(null)

  useEffect(() => {
    countAsiaCases();
  }, []);

  const countAsiaCases = () => {
    let totalAsiaCases = 0;
    detail.map((detail) => {
      if (detail.continent === 'Australia-Oceania') {
        totalAsiaCases += detail.cases;
      }
    });
    setCasesCount(totalAsiaCases);
  };

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const labels = ['Australia', 'February', 'March', 'April', 'May', 'June', 'July'];

  useEffect(() => {
    setChartData({
        labels,
        datasets: [
            {
                label: 'User Sign up',
                borderColor: '#009BF2',
                backgroundColor: '#009BF2',
                data: [casesCount, 22201, 19490, 17938, 24182, 17842, 22475],
              },
              {
                label: 'User Dashboard',
                data: [68452, 45247, 45249, 62486, 1234, 48566],
                borderColor: '#8EF27E',
                backgroundColor: '#8EF27E',
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
    <div className='LineChart'>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default LineChart
