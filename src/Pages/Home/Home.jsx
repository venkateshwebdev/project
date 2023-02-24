import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to="/wether">we ' ther '</Link>
                </li>
                <li>
                <Link to="/calc">calc ' later '</Link>
                </li>
                <li>
                    <Link to='/todo'> To ' DO '</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Home;