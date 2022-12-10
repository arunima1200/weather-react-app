import React from 'react'
import './Sidebar.css';
import Cities from './Cities';
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import Header from './Header';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Router>
      <ul className='side-list'>
        <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active-home active' : 'link')} >Home</NavLink></li>
        <li><NavLink to="/cities" className={(navData) => (navData.isActive ? 'active-city active' : 'link')} >Cities</NavLink></li>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </ul>
      </Router>
    </div>
  )
}

export default Sidebar
