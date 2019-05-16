import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-box">
    <p>Logga in med personlig kod</p>
    <input type="password" placeholder="Ange din kod"/>
    <div className="digits">

    </div>
    <div className="buttons-submit-cancel">
      <button id="submit-button">Logga in</button>
      <button id="cancel-button">X</button>
    </div>
   
    </div>
  );
}

export default App;
