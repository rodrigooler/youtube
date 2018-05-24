import React from 'react';
import MaterialIcon from 'material-icons-react';
import logoPath from '../youtube_logo.png';
import avatarImg from '../photo.jpg'
import './header.css';
import Popup from './Popup';
import MoreMenu from './navigations/MoreMenu';
import NotificationsMenu from './navigations/NotificationsMenu';
import NewPostMenu from './navigations/NewPostMenu';
import AppsMenu from './navigations/AppsMenu';

import Button from './Button'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNewpostOpen:false,
            isAppsMenuOpen:false,
            isMoreMenuOpen:false,
            isNotificationsMenuOpen:false

        }
        this.openNewpostMenu = this.openNewpostMenu.bind(this)
        this.openAppsMenu = this.openAppsMenu.bind(this);
        this.openMoreMenu = this.openMoreMenu.bind(this);
        this.openNotificationsMenu = this.openNotificationsMenu.bind(this);
    }

    openNotificationsMenu(){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isAppsMenuOpen:false,
            isNewpostOpen:false,
        }, _self.setState({
            isNotificationsMenuOpen:true,
        }))
    }
    renderLoggedIcons(){

        return(
            <div className="logged-container">
                <Button classStyle="notification-button" iconName="notifications" ariaLabel="notification" func={this.openNotificationsMenu} />


                <Popup visibility={this.state.isNotificationsMenuOpen ? 'show' : 'hide'}

                >
                    <NotificationsMenu />
                </Popup>

                <button className="avatar-button" aria-label="avatar" onClick={this.props.logOut} >
                    <img src={avatarImg} alt="avatar" className="avatar-circle" />
                </button>
            </div>
        )
    }
    renderIcons(){
        return (
            <div className="logged-container">
                <Button classStyle="more-button" iconName="more_vert" ariaLabel="more" func={this.openMoreMenu} />

                <Popup visibility={this.state.isMoreMenuOpen ? "show" : "hide"}   >
                   <MoreMenu />
                </Popup>

                <button className="login-button" aria-label="login" onClick={this.props.logIn}>
                    ACCEDI
                </button>
            </div>
        )
    }
    /* open load video or post popup */
    openNewpostMenu(e){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isAppsMenuOpen:false,
            isNotificationsMenuOpen:false
        }, _self.setState({
            isNewpostOpen:true,
        }))
    }

    openAppsMenu(e){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isNewpostOpen:false,
            isNotificationsMenuOpen:false
        }, _self.setState({
            isAppsMenuOpen:true,
        }))
    }
    openMoreMenu(e){
        const _self = this;
        this.setState({
            isNewpostOpen:false,
            isAppsMenuOpen:false,
            isNotificationsMenuOpen:false
        }, _self.setState({
            isMoreMenuOpen : true
        }))
    }


    render(){
        console.log("RENDER: ", this.state);

        return(
            <header className='header'>
                <div className="header-left">
                    <Button classStyle="hamburger-menu" iconName="menu" ariaLabel="menu"  func={this.props.handleSideMenu} />


                    <div className="logo-container">
                        <img className="logo-img" src={logoPath} alt="youtube logo" />
                    </div>
                </div>

                <div className="header-center">
                    <div className="search-bar">
                        <input className="search-input" placeholder="Cerca"/>
                        <button className="search-button" aria-label="">
                            <MaterialIcon icon="search" size="small"/>
                        </button>
                    </div>
                </div>

                <div className="header-right"  >

                    <Button classStyle="new-post-button" iconName="video_call" ariaLabel="viao call" func={this.openNewpostMenu}  />


                    <Popup visibility={this.state.isNewpostOpen ? "show" : "hide"} >
                        <NewPostMenu />
                    </Popup>

                    <Button classStyle="apps-button" iconName="apps" ariaLabel="viao call" func={this.openAppsMenu}  />


                    <Popup visibility={this.state.isAppsMenuOpen ? "show" : "hide"}  >
                       <AppsMenu />
                    </Popup>

                    {this.state.isLogged ?  this.renderLoggedIcons()  :   this.renderIcons()  }
                </div>
            </header>
        )
    }
}

export default Header;