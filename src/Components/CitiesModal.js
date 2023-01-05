import React, { useState } from 'react';
import './CitiesModal.css';
import { Cities } from "../data";
import CitySelection from "./CitySelection";

function CitiesModal({setShowModal, cities, setCities}) {

  const [filteredCities, setFilteredCities] = useState(Cities);
  const [searchInput, setSearchInput] = useState("");
  const handleClick = () =>{
    setShowModal(false)
   
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    if(value) {
      const filtered = Cities.filter(city => city.name.toLowerCase().match(e.target.value.toLowerCase()));
      setSearchInput(value);
      setFilteredCities(filtered);
    }
    else {
      setSearchInput(value);
      setFilteredCities(Cities);
    }
  }
  
  return (
      <div className='city-modal'>
        <div className='city-modal-header'>
            <h5>Add City Modal</h5>
            <button onClick={handleClick}>X</button>
        </div>
        <hr style={{margin: "0"}}/>
        <input className="search-city" placeholder="Search City"  value={searchInput} type="text" onChange={handleSearch} />
        <hr style={{margin: "0"}}/>
        <div className='cities-container'>
          {
            filteredCities.filter(city => !cities.selected.includes(city))
              .map(city =>
               <CitySelection key={city.id} city={city} cities={cities} setCities={setCities}
            />)
            
          }
        </div>
    </div>
  )
}

export default CitiesModal