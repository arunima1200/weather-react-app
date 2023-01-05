import WeatherDetailSection from "./WeatherDetailSection";
import "./CityWeatherDetail.css";
import CityWeatherDetailHeader from "./CityWeatherDetailHeader";

const CityWeatherDetail = ({detailCity, cities, setCities}) => {
    
    return (
        <div className='city-weather-detail-container'>
                <CityWeatherDetailHeader detailCity={detailCity} cities={cities} setCities={setCities} />
            <hr />
            <div className="city-weather-detail">
                <WeatherDetailSection detailCity={detailCity} />
            </div>
        </div>
    )
}

export default CityWeatherDetail;