import React from "react";
import './Header.css';

const Header = ({setShowModal}) => {
    const handleClick = () =>{
        setShowModal(true)
    }
    return(
        <div className="header">
            <h3 className="head">My Favorite Cities</h3>
            <button className="home-btn" onClick={handleClick}>Add New City</button>
        </div>
    )
}
export default Header 
