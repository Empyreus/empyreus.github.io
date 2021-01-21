import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CameraModule from './CameraModule/CameraModule'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RJ Souza's Website</h1>
        </header>
        <CameraModule/>
        <p className="App-intro">
          Kyle and Martin's Test Camera
        </p>
      </div>
    );
  }
}

export default App;
