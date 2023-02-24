import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search";
import ToDOContext from "../../contexts/ToDocontext";
import "./todo.css"
const ToDo = () => {
    const todocxt = useContext(ToDOContext)
    const [todoList,setTodoList] = useState([]);
    const [todoItem,setTodoItem] = useState("");
    const handleForm = (e) =>{
        e.preventDefault()
        setTodoItem("")
        todoItem!==""&&setTodoList((prev)=>([...prev,todoItem]))
        
    }
    const handleInput = (e)=>{
        setTodoItem(e.target.value)
        
    }
    const removeElement = (e)=>{
        console.log(e)
        // alert("Your entry will be Deleted")
        setTodoList((current)=>current.filter((ele)=>ele!==e.target.innerHTML))
    }
    return ( 
        <div className={`toDo ${todocxt.toDoMode?"td-light":"td-dark"}`}>
        <Navbar navFirstName="TO " navSecondName={`" do "`} enableMode={true} enableSearch={false}/>
        <div className="todo-container">
            <div className="todo-wrap">
                <div className="todo-form-div">
                <form onSubmit={handleForm} className="todo-form">
                    <input onChange={handleInput} type="text" placeholder="Add a work..."  value={todoItem} />
                    <button className="todo-wrap-button">Add</button>
                </form>
                </div>
                <div className="todo-content-container">{todoList.map((e)=>(<div onClick={removeElement} className="todo-list-content"><span className="todo-list-content-before"></span><span className="element">{e}</span></div>))}
</div>
            </div>
            
        </div>
        </div>
     );
}
 
export default ToDo;