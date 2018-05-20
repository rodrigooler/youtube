import React, { Component } from 'react';
import Header from './components/Header'
import Sidemenu from './components/Sidemenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Sidemenu />
        <div className="body" />
      </div>
    );
  }
}

export default App;
