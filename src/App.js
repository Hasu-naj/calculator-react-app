import { useState } from 'react';
import './App.css'



const App = () => {
 const [result, setResult] = useState('');

 const clickHandler = (event)=> { 
   setResult(result.concat(event.target.name))
  
   }

 const clear = () => {
   setResult("");
 }

 const backspace = () => {
   setResult(result.slice(0, result.length - 1))
 }

 const calculate = () => {
   try {
  setResult((eval(result).toString() ));
   }catch (error) {
     setResult('Error')
  }
 }
 
  return (
    <div className="calculator-grid">
        <div className="output">
          {result ? <span>({result})</span> : '' } 
          {result || '0'}
          </div>
        
          <button id='clear' onClick={clear}>Clear</button>
          <button id='backspace' onClick={backspace}>C</button>
          <button name='+' id='opt'  onClick={clickHandler}>+</button>
          <button name='7' onClick={clickHandler}>7</button>
          <button name= '8'  onClick={clickHandler}>8</button>
          <button name='9'  onClick={clickHandler}>9</button>
          <button name='-' id='opt'  onClick={clickHandler}>-</button>
          <button name='4'  onClick={clickHandler}>4</button>
          <button name='5'  onClick={clickHandler}>5</button>
          <button name='6'  onClick={clickHandler}>6</button>
          <button name='*' id='opt'  onClick={clickHandler}>*</button>
          <button name='1'  onClick={clickHandler} >1</button>
          <button name='2'  onClick={clickHandler}>2</button>
          <button name='3'  onClick={clickHandler}>3</button>
          <button name='/' id='opt' onClick={clickHandler} >/</button>
          <button name='0'  onClick={clickHandler}>0</button>
          <button name='.' onClick={clickHandler}>.</button>
          <button id='result' onClick={calculate}>=</button>
        
    </div>
  )

};

export default App;
