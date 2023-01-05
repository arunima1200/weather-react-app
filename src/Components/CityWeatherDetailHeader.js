import {useEffect, useState} from "react";
import "./CityWeatherDetailHeader.css";
import { Checkmark } from 'react-checkmark';

const CityWeatherDetailHeader = ({detailCity, cities, setCities}) => {
    const checkIsCityFavourite = (cities, detailCity) => {
        console.log( cities.favourites.filter(city => city.name === detailCity.name)
        )
        const result=cities.favourites.filter(city => city.name === detailCity.name);
        return(result.length>0)
    
    }
    const [isFavourite, setIsFavourite] = useState(checkIsCityFavourite(cities, detailCity));
    useEffect(() => {
        setIsFavourite(checkIsCityFavourite(cities, detailCity));  
    },[detailCity])
    const handleClick = (e) => {
        console.log(cities);
        e.preventDefault();
        
        if(isFavourite) {
            setCities({
                selected: cities.selected,
                favourites: cities.favourites.filter(city => city.name !== detailCity.name)
            })
            setIsFavourite(false);

        }
        else {
            setCities({
                selected: cities.selected,
                favourites: [...cities.favourites, detailCity]
            })
            setIsFavourite(true);
            setIsAlertVisible(true);

            setTimeout(() => {
                setIsAlertVisible(false);
           }, 2000);
        }
       
    }
    const [ isAlertVisible, setIsAlertVisible ] = useState(false);

   

    const imageSource = isFavourite? "favourite-selected.png" : "favourite-unselected.png";

    return (
        <div className='city-weather-detail-header'>
            <h3 className="city-head">{detailCity.name}</h3>
            <div className="favourite-icon" onClick={handleClick}>
            {isAlertVisible && <div className='alert-container'>
            
               <div className='alert-inner' ><Checkmark size={20}/><div>City added in Favorite List</div></div>
           </div>}   
                <img   className='img-favourite' src={imageSource}/>
            </div>
        </div>
    )
}

export default CityWeatherDetailHeader;