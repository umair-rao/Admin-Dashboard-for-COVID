import React from 'react'
import '../styles/DataSummary.css'
import { FiArrowDownLeft } from 'react-icons/fi'
import { BsArrowUpRight } from 'react-icons/bs'
import { RiStockFill } from 'react-icons/ri'
import { AiOutlineStock } from 'react-icons/ai'

const DataSummary = () => {
  return (
    <div className="data-summary-container">
    <div className="data-summary-card">
      <div className='card-icon'>
        <FiArrowDownLeft className='down-arrow'/>
      </div>
      <div className='card-content'>
        <h3>Total Visits</h3>
        <h2>6300</h2>
      </div>
    </div>
      <div className="data-summary-card">
        <div className='card-icon2'>
            <BsArrowUpRight className='up-arrow'/>
        </div>
        <div className='card-content'>
        <h3>Total Subscribers</h3>
        <h2>32</h2>
      </div>
      </div>
      <div className="data-summary-card">
        <div className='card-icon2 card-icon3'>
            <RiStockFill className='up-arrow'/>
        </div>
        <div className='card-content'>
        <h3>Active Users</h3>
        <h2>20</h2>
      </div>
      </div>
      <div className="data-summary-card">
        <div className='card-icon2 card-icon4'>
            <AiOutlineStock className='up-arrow'/>
        </div>
        <div className='card-content'>
        <h3>Total Clicks</h3>
        <h2>20</h2>
      </div>
      </div>
    </div>
  )
}

export default DataSummary
