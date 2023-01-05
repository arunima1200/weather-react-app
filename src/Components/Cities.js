import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Cities.css';
import CitiesModal from './CitiesModal';
import CityWeatherDetail from './CityWeatherDetail';
import SelectedCity from './SelectedCity';

const  Cities = ({showModal ,setShowModal, cities, setCities}) => {
  const [detailCity, setDetailCity] = useState({});
  const handleClick = () =>{
    setShowModal(true)
  }
  return (
    <div className='city'>
    <Sidebar/>
    <div className='city-container'>
        <div className='selected-city-header'>
          <h3 className='city-head'>Cities</h3>
          <button className='city-add-btn' onClick={handleClick}>+</button>
        </div>
        <hr/>
        {
          cities.selected.length ?
          cities.selected.map(city =><SelectedCity city={city} setDetailCity={setDetailCity} />)
          :
          <p className='city-msg'>You have not selected any city.</p>
        }
    </div>
    {
      Object.keys(detailCity).length > 0 && <CityWeatherDetail detailCity={detailCity} cities={cities} setCities={setCities}/>
    }
    { showModal &&
              <CitiesModal 
                setShowModal={setShowModal}
                cities={cities}
                setCities={setCities}
              />
           }
    </div>
  )
}

export default Cities
