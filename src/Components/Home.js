import Sidebar from "./Sidebar";
import Header from "./Header";
import  "./Home.css";
import CitiesModal from "./CitiesModal";
import WeatherDetailSection from "./WeatherDetailSection";
import CityWeatherDetailHeader from "./CityWeatherDetailHeader";

const Home = ({showModal , setShowModal, cities, setCities}) => {
   
    return (
        <div className="home">
           <Sidebar />
           <div className='home-container'>
             <Header setShowModal={setShowModal}/>
             <div className='card-container'>
             {
               cities.favourites.length > 0 ?
                cities.favourites.map(city => {
                  return (
                    <div key={city.id} className='city-card'>
                      <CityWeatherDetailHeader detailCity={city} cities={cities} setCities={setCities}/>
                      <WeatherDetailSection detailCity={city} />
                  </div>
                  )
                })
               :
               <p>You have not selected any city as a favorite yet.</p>
             }
             </div>
           </div>
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

export default Home;