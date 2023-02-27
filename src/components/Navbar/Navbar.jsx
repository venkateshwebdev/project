import './navbar.css'
import {BiSearch} from 'react-icons/bi'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import { useContext, useEffect, useState, useRef } from 'react'
import WeatherContext from '../../contexts/wetherContext'
import ToDOContext from '../../contexts/ToDocontext'
import CalculatorContext from '../../contexts/calclater'

const Search = (props)=>{
    return(
        <form onSubmit={props.submit}>
        <div className='search' >
        <input type="text" onChange={props.work} placeholder={"Enter Co-ordinates"} value={props.value}/>
        <button className='searchButton'><BiSearch  onClick={props.clear} /></button>
        </div>
        </form>
    )
}


const Navbar = (props) => {
    const [searchType,setSearchType] = useState(props.enableSearch);
    const [mode,setMode] = useState(props.enableMode)
    const cxt = useContext(WeatherContext)
    const todocxt = useContext(ToDOContext)
    const calcxt = useContext(CalculatorContext)
    const changeTheme = ()=>{
        todocxt.setToDoMode((prev)=>(!prev))
        calcxt.setCalTheme((prev)=>(!prev))
    }
    return (
        <div className={`navbar-container`}>
            <div className='navbar-heading'><span className='s1'>{props.navFirstName}</span><span className='s2'>{props.navSecondName}</span></div>
            {mode&&<div onClick={changeTheme}>{todocxt.toDoMode?"🌙":"☀️"}</div>}
            <div className='search-container'>
                {searchType&&<Search value={props.value} submit={props.submit} work={props.work} clear={()=>cxt.setToggle(true)} />}
            
            </div>
            {searchType&&<div className='toggle-menu'>
                {cxt.toggle?<RiMenu3Line onClick={()=>cxt.setToggle(false)}/>:<RiCloseLine onClick={()=>cxt.setToggle(true)} />}
                {!cxt.toggle&& <div className='toggle-menu-container'>
                    <Search value={props.value} submit={props.submit} work={props.work} /></div>}
            </div>}
            
            
        </div>
     );
}
 
export default Navbar ;