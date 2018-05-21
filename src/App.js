import React, { Component } from 'react';
import Header from './components/Header'
import Sidemenu from './components/Sidemenu';
import Page from './components/Page'
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Sidemenu />
          <Page />
      </div>
    );
  }
}

export default App;
