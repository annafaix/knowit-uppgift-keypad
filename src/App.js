import React, {Component} from 'react';
import './App.scss';

export function InputField(props) {
  return(
    <div className="input-container">
      <p>Logga in med personlig kod</p>
      <input placeholder="Ange din kod" 
        type="password" 
        value={props.input} 
        onChange={props.inputHandler} />
    </div>
  
  )
}
export function Digits(props){
  return (
    <div className="digits-container">
      {props.numbersArray.map((value, index) => {
       return <button id="digit-button" 
          onClick={props.digitsBtnHandler} 
          value={value}
          disabled={value==null}
          key={index}>{value}</button>
      })
      }
    </div>      
  )
}

export function LoginOrDeleteButtons(props){
  return(
    <div className="buttons-submit-cancel">
      <button id="submit-button" onClick={props.submitLogIn} disabled={props.disabled}>Logga in</button>
      <button id="cancel-button" onClick={props.deleteValue} disabled={props.disabled}>X</button>
    </div>
  )
}
export class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      inputValue:"",
      numbersArray:[0,1,2,3,4,5,6,7,8,9, null,null,null,null,null ,null],
    }
  }

  componentWillMount(){
    this.shuffleArray(this.state.numbersArray)
  }
  shuffleArray = (array) =>{
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  handleDigitsButtons= (e)=> {
    this.setState({inputValue: this.state.inputValue+e.target.value})
  }
  submitLogIn=()=>{
    console.log(`Din personliga kod: ${this.state.inputValue}`)
    alert(`Din personliga kod: ${this.state.inputValue}`)
  }
  deleteValue=()=>{
    let newValue = this.state.inputValue.slice(0,-1)
    this.setState({inputValue:newValue})
  }

  render(){
    return(
      <div className="main-box">
        <InputField input={this.state.inputValue} inputHandler={this.handleInputChange} />
        <Digits numbersArray={this.state.numbersArray} digitsBtnHandler={this.handleDigitsButtons}/>
        <LoginOrDeleteButtons submitLogIn={this.submitLogIn} deleteValue={this.deleteValue}  disabled={!this.state.inputValue}/>
      </div>
    )
  }
}

export default App;
