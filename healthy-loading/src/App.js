import React, { Component } from 'react';
import apple from './apple.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <img src={apple} alt="apple" style={{height: 350, width: 'auto'}} />
      </div>
    );
  }
}

export default App;
