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
import UserProfileMenu from './navigations/UserProfileMenu'
import Button from './Button'
import SearchBar from "./SearchBar";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNewpostOpen:false,
            isAppsMenuOpen:false,
            isMoreMenuOpen:false,
            isNotificationsMenuOpen:false,
            isUserProfileOpen:false

        };

        this.openNewpostMenu = this.openNewpostMenu.bind(this)
        this.openAppsMenu = this.openAppsMenu.bind(this);
        this.openMoreMenu = this.openMoreMenu.bind(this);
        this.openNotificationsMenu = this.openNotificationsMenu.bind(this);
        this.openUserProfileMenu = this.openUserProfileMenu.bind(this);

    }

    openUserProfileMenu(){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isAppsMenuOpen:false,
            isNewpostOpen:false,
            isNotificationsMenuOpen:false,
        }, _self.setState({

            isUserProfileOpen: true
        }))
    }

    openNotificationsMenu(){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isAppsMenuOpen:false,
            isNewpostOpen:false,
            isUserProfileOpen: false
        }, _self.setState({
            isNotificationsMenuOpen:true,
        }))
    }
    renderLoggedIcons(){

        return(
            <div className="logged-container">
                <Button type="button" classStyle="notification-button ripple" iconName="notifications" ariaLabel="notification" func={this.openNotificationsMenu} />


                <Popup visibility={this.state.isNotificationsMenuOpen ? 'show' : 'hide'}

                >
                    <NotificationsMenu />
                </Popup>

                <button type="button" className="avatar-button" aria-label="avatar" onClick={this.openUserProfileMenu} >
                    <img src={avatarImg} alt="avatar" className="avatar-circle" />
                </button>

                <Popup visibility={this.state.isUserProfileOpen ? 'show' : 'hide'} style="user-profile-popup">
                    <UserProfileMenu logOut={this.props.logOut}>
                        <img src={avatarImg} alt="avatar" className="avatar-circle" />
                    </UserProfileMenu>
                </Popup>

            </div>
        )
    }
    renderIcons(){
        return (
            <div className="logged-container">
                <Button type="button" classStyle="more-button ripple" iconName="more_vert" ariaLabel="more" func={this.openMoreMenu} />

                <Popup visibility={this.state.isMoreMenuOpen ? "show" : "hide"}   >
                   <MoreMenu />
                </Popup>

                <button type="button" className="login-button" aria-label="login" onClick={this.props.logIn}>
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
            isNotificationsMenuOpen:false,
            isUserProfileOpen:false
        }, _self.setState({
            isNewpostOpen:true,
        }))
    }

    openAppsMenu(e){
        const _self = this;
        this.setState({
            isMoreMenuOpen : false,
            isNewpostOpen:false,
            isNotificationsMenuOpen:false,
            isUserProfileOpen:false,
        }, _self.setState({
            isAppsMenuOpen:true,
        }))
    }
    openMoreMenu(e){
        const _self = this;
        this.setState({
            isNewpostOpen:false,
            isAppsMenuOpen:false,
            isNotificationsMenuOpen:false,
            isUserProfileOpen:false,
        }, _self.setState({
            isMoreMenuOpen : true
        }))
    }


    render(){
        console.log("RENDER: ", this.state);

        return(
            <header className='header'>
                <div className="header-left">
                    <Button type="button" classStyle="hamburger-menu ripple" iconName="menu" ariaLabel="menu"  func={this.props.handleSideMenu} />


                    <div className="logo-container">
                        <img className="logo-img" src={logoPath} alt="youtube logo" />
                    </div>
                </div>

                <div className="header-center">
                    <SearchBar />
                </div>

                <div className="header-right"  >

                    <Button classStyle="new-post-button ripple" iconName="video_call" ariaLabel="viao call" func={this.openNewpostMenu}  />


                    <Popup visibility={this.state.isNewpostOpen ? "show" : "hide"} >
                        <NewPostMenu />
                    </Popup>

                    <Button type="button" classStyle="apps-button ripple" iconName="apps" ariaLabel="viao call" func={this.openAppsMenu}  />


                    <Popup visibility={this.state.isAppsMenuOpen ? "show" : "hide"}  >
                       <AppsMenu />
                    </Popup>

                    {this.props.isLogged ?  this.renderLoggedIcons()  :   this.renderIcons()  }
                </div>
            </header>
        )
    }
}

export default Header;