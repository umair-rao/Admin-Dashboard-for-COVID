import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BarChart from './components/BarChart';
import BarLineChart from './components/BarLineChart';
import DataSummary from './components/DataSummary';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { fetchCovidDetail } from './Redux/CovidDetail';

function App() {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covidDetail);
  useEffect(() => {
      dispatch(fetchCovidDetail());
  }, []);

  return (
    <div className="App">
      <div className='container'>
      <Navbar/>
     <div className='app-center'>
      <DataSummary/>
      <BarLineChart detail={covidData.covidDetail}/>
     </div>
     <div className='footer-charts'>
      <BarChart detail={covidData.covidDetail}/>
      <DoughnutChart detail={covidData.covidDetail}/>

     </div>
     <LineChart detail={covidData.covidDetail}/>
      </div>
    </div>
  );
}

export default App;
