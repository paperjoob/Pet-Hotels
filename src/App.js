import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  return (
  
    <div className="App">
     <h1>Pet Hotel </h1>
     <input placeholder = "Pet Name"></input>
     <input placeholder = "Pet Breed"></input>
     <button>Submit</button>
    </div>
  );
}

export default App;
