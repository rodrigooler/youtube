import React, { Component } from 'react';
import Header from './components/Header'
import Sidemenu from './components/Sidemenu';
import Page from './components/Page'
import 'normalize.css';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogged: false,
            isMenuOpen: false
        }
        this.openSideMenu = this.openSideMenu.bind(this);
        this.closeSideMenu = this.closeSideMenu.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.handleSideMenu = this.handleSideMenu.bind(this);
    }

    openSideMenu(){
         this.setState({
             isMenuOpen : true,
         })
    }

    closeSideMenu(){
        this.setState({
            isMenuOpen : false,
        })
    }

    handleSideMenu(){
        let menuStatus = this.state.isMenuOpen;
        this.setState({
            isMenuOpen: !menuStatus
        })
    }

    logIn(){
        this.setState({
            isLogged : true
        })
    }

    logOut(){
        this.setState({
            isLogged : false
        })
    }

  render() {
    return (
      <div className="App">

          <Header
            logIn={this.logIn}
            logOut={this.logOut}
            handleSideMenu={this.handleSideMenu}
            openMenu={this.openSideMenu}
            closeMenu={this.closeSideMenu}
          />
          <Sidemenu
              logIn={this.logIn}
              logOut={this.logOut}
              openMenu={this.openSideMenu}
              closeMenu={this.closeSideMenu}
              classStyle={this.state.isMenuOpen ? 'sidemenu-container show' : 'sidemenu-container hide'}
          />

          <Page />
      </div>
    );
  }
}

export default App;
