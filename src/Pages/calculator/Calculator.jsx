import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CalculatorContext from "../../contexts/calclater";
import './calculator.css'
const Calculator = () => {
    const [font,setFont] = useState()
    return ( 
    <CalculatorContext.Provider value={{font,setFont}}>
    <div className="calculator-container">
    <Navbar navFirstName="CALC " navSecondName={`" later "`} enableSearch={false} enableMode={true} />
    <div className="calculator-box">
        <div className="calculator-display"></div>
        <div className="calculator-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Ac</button>
            <button>+</button>
            <button>X</button>
            <button>-</button>
            <button>%</button>
            <button>=</button>
            <button>+/-</button>
            <button>.</button>
            <button>%</button>
        </div>
    </div>
    </div>
    </CalculatorContext.Provider> )
}
 
export default Calculator;