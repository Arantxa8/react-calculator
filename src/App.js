import React, {useState} from 'react';
import './App.css';


//create app function
function App() {
  //asigning states
  const [result, setResult] = useState("");

  //function for buttons on click
  function buttonsClick(e){
    if (result == "Error"){
      setResult("");
      
    } else if(result.length<13){
      console.log(result);
    setResult(result.concat(e.target.name));
    } 
  };

  //clear button
  function clear(){
    setResult("");
  }

  //clear entry button
  function clearEntry(){
    setResult(result.slice(0, result.length - 1));
  }

  //function to calculate the result
  function calculate(){
    try{
      setResult(eval(result).toString().slice(0,14));
      
    } catch(err){
      setResult("Error");
      
    }
  }

  //rendering

  return (
    <div className="calcContainer">
      <form>
        <input className="calcScreen" type="text" defaultValue={result} readOnly/>
      </form>
      <div className="buttons">
        <button onClick={clear} id="clear" className="operations">Clear</button>
        <button onClick={clearEntry} id="clearEntry" className="operations">CE</button>
        <button name="7" onClick={buttonsClick}>7</button>
        <button name="8" onClick={buttonsClick}>8</button>
        <button name="9" onClick={buttonsClick}>9</button>
        <button name="/" onClick={buttonsClick} className="operations">&divide;</button>
        <button name="4" onClick={buttonsClick}>4</button>
        <button name="5" onClick={buttonsClick}>5</button>
        <button name="6" onClick={buttonsClick}>6</button>
        <button name="*" onClick={buttonsClick} className="operations">x</button>
        <button name="1" onClick={buttonsClick}>1</button>
        <button name="2" onClick={buttonsClick}>2</button>
        <button name="3" onClick={buttonsClick}>3</button>
        <button name="-" onClick={buttonsClick} className="operations">&ndash;</button>
        <button name="0" onClick={buttonsClick}>0</button>
        <button name="." onClick={buttonsClick}>.</button>
        <button id="result" onClick={calculate} className="operations">=</button>
        <button name="+" onClick={buttonsClick} className="operations">+</button>
      </div>
    </div>
  );
}

export default App;
