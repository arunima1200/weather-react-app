import React from 'react'
import './Cities.css';

const Cities = () => {
  return (
    <div className='City-container'>
            <h3 className='city-head'>Cities</h3>
            <button className='city-add-btn'>+</button>
            <hr />
            <p className='city-msg'>You have not selected any city.</p>
    </div>
  )
}

export default Cities