import { Link } from "react-router-dom";
import WeatherContext from "../../contexts/wetherContext";
import './home.css'
import { useState } from "react";
const Home = () => {
    return (
        
        
        <div className="home">
            <div><Link to="/wether">we ' ther '</Link></div>
            <div><Link to="/calc">calc ' later '</Link></div>
            <div><Link to='/todo'> To ' DO '</Link></div> 
                

        </div>
     );
}
 
export default Home;