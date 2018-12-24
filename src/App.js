import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css"
import TimerDashBord from './components/TimerDashBord';

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <TimerDashBord />
      </div>
    );
  }
}

export default App;