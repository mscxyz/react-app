import React, { Component } from 'react';
import logo from './logo.svg';
import Payroll from './Payroll';
import './App.css';

import Employee from './Employee';

class App extends Component {
  
  render() {

    return (
      <div className="App">

        <div className="container">
      
        <Employee name={'mike silva cute'}/>

        </div>
         
          <Payroll/>

      </div>
    );
    
  }
  
}

export default App;
