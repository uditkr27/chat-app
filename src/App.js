import React, { Component } from 'react';
import './App.css';

import AddDetails from './pages/addDetails/addDetails';
 

class App extends Component {
  render(){
  return (
    <div className="App"> 
        <AddDetails/>
    </div>
  );
  // return React.createElement('div',null,'h1','hi');
  }
}

export default App;
