import Calculator from './Pages/calculator/Calculator';
import Wether from './Pages/weather/Wether';
import { Route,Routes } from 'react-router-dom';
import './styles.css'
import Home from './Pages/Home/Home';
import ToDo from './Pages/ToDo/ToDo';
import ToDOContext from './contexts/ToDocontext';
import { useState } from 'react';


const App = ()=>{
    const [toDoMode,setToDoMode] = useState(true);
    return(
        <ToDOContext.Provider value={{toDoMode,setToDoMode}}>
        <div>
            <Routes>
                <Route path ="/" element={<Home/>} />
                <Route path ="/calc" element={<Calculator/>} />
                <Route path ="/wether" element={<Wether/>} />
                <Route path = "/todo" element={<ToDo />} />
            </Routes>
        </div>
        </ToDOContext.Provider>
    )
}
export default App;