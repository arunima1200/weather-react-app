import "./WeatherDetailSection.css";

const WeatherDetailSection = ({detailCity}) => {
    return (
        <div className='weather-detail-section'>
            <p style={{color:"green"}}>{detailCity.desc}</p>
            <div><span style={{fontWeight: "700"}}>Temperature: </span>{detailCity.temp}</div>
            <div><span style={{fontWeight: "700"}}>Humidity: </span>{detailCity.humidity}</div>
        </div>
    )
}

export default WeatherDetailSection;