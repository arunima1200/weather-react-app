import React, { useState } from 'react'
import './CitySelection.css';

const  CitySelection = ({city, cities, setCities}) => {
  const [ isAlertVisible, setIsAlertVisible ] = useState(false);

   
  const handleClick = (e) => {
    setIsAlertVisible(true);

    setTimeout(() => {
         setIsAlertVisible(false);
     }, 3000);
    setCities({
      selected: [...cities.selected, city],
      favourites: cities.favourites
    });
   
  }

  
  
  return (
    <div className='city-selection'>
      <h5 style={{margin: "0"}} id={city.name}>{city.name}</h5>
      <button className="add-city-button" name={city.name} onClick={handleClick}>+</button>
      {isAlertVisible && <div className='city-container'>
               <div className='city-inner'>City added</div>
           </div>}
    </div>
  )
}

export default CitySelection;