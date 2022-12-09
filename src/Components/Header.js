import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <h3 className='head'>My Favourite Cities</h3>
        <button className='home-btn'>Add New City</button>
        <p className='msg'>You have not selected any city as a favourite yet.</p>
    </div>
  )
}

export default Header