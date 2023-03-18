import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import WeatherContext from "../../contexts/wetherContext";
import "./wether.css"
const Wether = (props) =>{
    const [hourCheck,setHourCheck] = useState(true); 
    const [hour,setHour] = useState(false);
    const [font,setFont] = useState(true);
    const [finalData,setFinalData] = useState({});
    const APIkey = "c62789a2d6adc27245210c4793aa2a2e";
    const [lat,setLat] = useState(16.4877);
    const [lon,setLon] = useState(81.8641);
    const [coordinates,setCoordinates] = useState("")
    const [array,setArray] = useState([])
    const [toggle,setToggle] = useState(true)
    useEffect(()=>{
        const d = new Date();
        let dhour = d.getHours();
        setHour(dhour);
        if (dhour >= 18 || dhour<=6){
            setHourCheck(false)
            setFont(false)
        }
        else{
            setHourCheck(true)
            setFont(true)
        }
    },[])
    useEffect(()=>{
        
        (async ()=>{const weather_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        const data = await weather_data.json()
        console.log(data)
           const d = {
            city_name:data.name,
            country_name:data.sys.country,
            temperature:Math.floor((data.main.temp)-273.15),
            weather_main:data.weather[0].main,
            weather_description:data.weather[0].description,
            weather_icon:data.weather[0].icon
           }
           setFinalData(d)
           console.log(d)})();
    },[lat,lon])
    const handleLoactionChange= (e)=>{
        console.log(e.target.value)
        setCoordinates(e.target.value)

    }
    const future_data =[{date:"3-4-23",wether:"Rainy",icon:"🌦️"},{date:"3-4-23",wether:"SUnny",icon:"☀️"},{date:"5-3-23",wether:"Rainy",icon:"⛈️"}]
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLat(coordinates.split(",")[0])
        setLon(coordinates.split(",")[1])
        console.log(lat)
        console.log(lon)
        setCoordinates("");
        setToggle(true)
        alert("Enter the coordinates in the from of (LAT,LON) with no spaces")
    }
    return(
        <WeatherContext.Provider value={{toggle,setToggle}}>
        <div className={`wether-container ${hourCheck?"day":"night"}`}>
        <Navbar work={handleLoactionChange} navFirstName="WE " navSecondName={`" ther "`} enableSearch={true} value={coordinates} submit={handleSubmit} />
        <div className="temp-content">
        <div>
        <div className="temp">{finalData.temperature} °c</div>
        <div className="add">{finalData.city_name} , {finalData.country_name}</div>
        <div className="coor">( {lat}°N , {lon}°E )</div>
        </div>
        <div className="wether-content">
        <div className="wether-icon"><img src={`http://openweathermap.org/img/wn/${finalData.weather_icon}.png`} alt="icon" /></div>
        <div className="wether-main">{finalData.weather_main}</div>
        <div className="wether-description">{finalData.weather_description}</div>
        </div>
        </div>
        {/* <div className="transp">
            {future_data.map((e)=><div className="future">{e.date} {e.icon} {e.wether}</div>)}
        </div> */}
        </div>
        </WeatherContext.Provider>

    )
}
// October 13, 2013 11:13:00
// {finalData.temperature}
// {finalData.weather_main}
// {finalData.weather_description}
// <img src={`http://openweathermap.org/img/wn/${finalData.weather_icon}.png`} alt="icon" />
// http://openweathermap.org/img/wn/10d@2x.png
export default Wether;