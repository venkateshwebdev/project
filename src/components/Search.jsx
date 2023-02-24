import {BiSearch} from 'react-icons/bi'
import "./Navbar/navbar.css"
const Search = (props)=>{
    return(
        <div className='search'>
        <input type="search" placeholder={props.placeholder} />
        <BiSearch  onClick={props.clear} />
        </div>
    )
}

export default Search;