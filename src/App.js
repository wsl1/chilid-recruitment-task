import React, { Component } from 'react';
import Profile from './Profile/Profile';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App" style={{margin: '20px'}}>
        <Profile small/>
      </div>
    );
  }
}

export default App;
