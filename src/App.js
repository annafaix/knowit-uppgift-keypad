import React, {useState} from 'react';
import './App.css';

function Digits(){
  let numbersArray= [0,1,2,3,4,5,6,7,8,9];
  return (
    <div className="digits">
      {numbersArray.map((value, index) => {
        return <button onClick={this.props.hanleEvent} key={index}>{value}</button>
      })}
    </div>
  )
}

function App() {
  let numbersArray= [0,1,2,3,4,5,6,7,8,9,null, null, null, null,null, null];
  let arrayLength = 16;
  let [inputValue, setInputValue] = useState("")

  function handleInputChange(e){
    setInputValue(e.target.value)
  }
  function handleDigitsButtons(e){
    setInputValue(inputValue + e.target.value)
  }
  function submitLogIn(){
    console.log(`Din personliga kod: ${inputValue}`)
  }
  function deleteValue(){
    setInputValue(inputValue.slice(0,-1))
  }
  return (
    <div className="main-box">
    <p>Logga in med personlig kod</p>
    <input  placeholder="Ange din kod" value={inputValue} onChange={handleInputChange}/>
    <div className="digits-container">
      {numbersArray.map((value, index) => {
        return <button className="digit-button" onClick={handleDigitsButtons} value={value} key={index}>{value}</button>
      })}
    </div>
    <div className="buttons-submit-cancel">
      <button id="submit-button" onClick={submitLogIn}>Logga in</button>
      <button id="cancel-button" onClick={deleteValue}>X</button>
    </div>
   
    </div>
  );
}

export default App;
