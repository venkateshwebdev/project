import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CalculatorContext from "../../contexts/calclater";
import './calculator.css'
const Calculator = () => {
    const [font,setFont] = useState()
    const [calTheme,setCalTheme] = useState(true);
    const [equation,setEquation] = useState("");
    const [answer,setAnswer] = useState()
    const numbersList = ["AC","⌫","%","÷",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","="]
    const clickButton=(e)=>{
        if (e.target.innerHTML === "AC"){
            setEquation("")
            setAnswer(0)
        }
        else if(e.target.innerHTML === "⌫"){
            setEquation(equation.slice(0,-1))
        }
        else{
            setEquation((prev)=>prev+e.target.innerHTML)
        }
        
    }
    useEffect(()=>{
        try{
            const lst = equation.slice(-1);
            if (!(lst==="+"||lst==="-"||lst==="*"||lst==="/"||lst==="%")){
                setAnswer(eval(equation))
            }
        }
        catch(err){
            setAnswer("ERROR")
        }

        
    },[equation])
    return ( 
    <CalculatorContext.Provider value={{font,setFont,calTheme,setCalTheme}}>
    <div className="condition">this page is only for mobile(scrren size of less than 800px)</div>
    <div className={`calculator-container ${calTheme?`light`:`dark`}`}>
    <Navbar navFirstName="CALC " navSecondName={`" later "`} enableSearch={false} enableMode={true} />
    <div className="calculator-box">
        <div className="calculator-display">
            <div className="calc-content">
                <div className="eq">{equation}</div>
                <div className="answer">{answer}</div>
            </div>
            <div className="display-style">
            <div className="style1"></div>
            <div className="style2"></div>
            </div></div>
        <div className="calculator-buttons">
            {numbersList.map((e)=><button onClick={clickButton} className={`gridItem${e}`}>{e}</button>)}
        </div>
    </div>
    </div>
    </CalculatorContext.Provider> )
}
 
export default Calculator;