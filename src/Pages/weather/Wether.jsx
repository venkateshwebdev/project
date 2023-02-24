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
    useEffect(async()=>{
        const weather_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
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
           console.log(d)
    },[])
    const handleLoactionChange= (e)=>{
        console.log(e.target.value)
    }
    return(
        <WeatherContext.Provider value={{font,setFont}}>
        <div className={`wether-container ${hourCheck?"day":"night"}`}>
        <Navbar work={handleLoactionChange}navFirstName="WE " navSecondName={`" ther "`} enableSearch={true}/>
        <div className="temp-content">
        <div>
        <div className="temp">{finalData.temperature} °c</div>
        <div className="add">{finalData.city_name} , {finalData.country_name}</div>
        </div>
        <div className="wether-content">
        <div className="wether-icon"><img src={`http://openweathermap.org/img/wn/${finalData.weather_icon}.png`} alt="icon" /></div>
        <div className="wether-main">{finalData.weather_main}</div>
        <div className="wether-description">{finalData.weather_description}</div>
        </div>
        </div>
        </div>
        </WeatherContext.Provider>

    )
}
// {finalData.temperature}
// {finalData.weather_main}
// {finalData.weather_description}
// <img src={`http://openweathermap.org/img/wn/${finalData.weather_icon}.png`} alt="icon" />
// http://openweathermap.org/img/wn/10d@2x.png
export default Wether;