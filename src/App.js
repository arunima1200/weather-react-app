import './App.css';
import Home from './Components/Home';
import Cities from './Components/Cities';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [showModal , setShowModal] =useState(false)
  const [ cities, setCities ] = useState({
    selected: [],
    favourites: []
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
           <Home 
             showModal={showModal} 
             setShowModal={setShowModal}
             cities={cities}
             setCities={setCities}
           />
            }
         />
          <Route path="/cities" element={
            <Cities
              showModal={showModal} 
              setShowModal={setShowModal}
              cities={cities}
              setCities={setCities}
            />
          } 
          />
        </Routes>
      </BrowserRouter>  
    </div> 
  );
}

export default App;
