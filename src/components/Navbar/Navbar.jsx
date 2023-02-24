import './navbar.css'
import {BiSearch} from 'react-icons/bi'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import { useContext, useState } from 'react'
import WeatherContext from '../../contexts/wetherContext'
import ToDOContext from '../../contexts/ToDocontext'
import Search from '../Search'


const Navbar = (props) => {
    const [toggle,setToggle] = useState(true);
    const [searchType,setSearchType] = useState(props.enableSearch);
    const [mode,setMode] = useState(props.enableMode)
    const cxt = useContext(WeatherContext)
    const todocxt = useContext(ToDOContext)

const Search = (props)=>{
    return(
        <div className='search' >
        <input type="search" onChange={props.work} placeholder={"Enter Co-ordinates"} />
        <BiSearch  onClick={props.clear} />
        </div>
    )
}
    const setToDO = ()=>{
        todocxt.setToDoMode((prev)=>(!prev))
    }

    return (
        <div className={`navbar-container`}>
            <div className='navbar-heading'><span className='s1'>{props.navFirstName}</span><span className='s2'>{props.navSecondName}</span></div>
            {mode&&<div onClick={setToDO}>{todocxt.toDoMode?"🌙":"🌚"}</div>}
            <div className='search-container'>
                {searchType&&<Search work={props.work} clear={()=>setToggle(true)} />}
            
            </div>
            {searchType&&<div className='toggle-menu'>
                {toggle?<RiMenu3Line onClick={()=>setToggle(false)}/>:<RiCloseLine onClick={()=>setToggle(true)} />}
                {!toggle&& <div className='toggle-menu-container'>
                    <Search work={props.work}/></div>}
            </div>}
            
            
        </div>
     );
}
 
export default Navbar ;