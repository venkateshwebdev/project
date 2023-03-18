import { Link } from "react-router-dom";
import WeatherContext from "../../contexts/wetherContext";
import './home.css'
import { useState } from "react";
const Home = () => {
    const [navbarContent,setnavbarContent]= useState("PROJECTS") 
    return (
        
        <div className="home-main">
            <div className="home-nav"><div className="nav-content">{navbarContent}</div></div>
            <div className="home">
            <Link to="/wether"><div onMouseOut={()=>setnavbarContent("PROJECTS")} onMouseOver={()=>setnavbarContent("we ' ther '")} className="home-proj wetherimg"></div>we ' ther '</Link>
            <Link to="/calc"><div onMouseOut={()=>setnavbarContent("PROJECTS")} onMouseOver={()=>setnavbarContent("calc ' later '")} className="home-proj calcimg"></div></Link>
            <Link to='/todo'><div onMouseOut={()=>setnavbarContent("PROJECTS")} onMouseOver={()=>setnavbarContent("To ' DO '")} className="home-proj todoimg"></div></Link>
            </div>
        </div>

     );
}
 
export default Home;