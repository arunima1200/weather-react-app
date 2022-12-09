import React from 'react'
// import Header from './Header';
import './Sidebar.css';
import Cities from './Cities';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Router>
        <ul className='side-list'>
            <li><Link to="" className='link'>Home</Link></li>
            <li><Link to="/cities" className='link'>Cities</Link></li>
            <Routes>
              <Route path="/" element={<div></div>}/> 
              <Route path="/cities" element={<Cities/>}/>
            </Routes>
        </ul>
      </Router>
    </div>
  )
}

export default Sidebar