const SelectedCity = ({city, setDetailCity}) => {
    const handleClick = () => {
        setDetailCity(city);
    }
    return (
        <div style={{border: "solid 1px black", margin: "5px", textAlign: "left", padding: "5px", backgroundColor: "white"}}
            onClick={handleClick}
        >
            <div>{city.name}</div>
            <div>{city.temp}</div>
        </div>
    )
}

export default SelectedCity;