import React from 'react'
// import Header from './Header';
import './Sidebar.css';
import Cities from './Cities';
import { BrowserRouter as Router, Route,  Routes, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Router>
      <ul className='side-list'>
        <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : 'link')} >Home</NavLink></li>
        <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'link')} to="/cities" >Cities</NavLink></li>
        <Routes>
          <Route path="/" element={<div style={{ color: "black", background: "white" }}>Home router Components is here</div>} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </ul>
      </Router>
    </div>
  )
}

export default Sidebar