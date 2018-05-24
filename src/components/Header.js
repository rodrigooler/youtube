import React from 'react';
import MaterialIcon from 'material-icons-react';
import logoPath from '../youtube_logo.png';
import avatarImg from '../photo.jpg'
import './header.css';
import Popup from './Popup';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged:false,
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
                <button className="notification-button" aria-label="notification" onClick={this.openNotificationsMenu} >
                     <MaterialIcon icon="notifications" size="small"/>
                </button>

                <Popup visibility={this.state.isNotificationsMenuOpen ? 'show' : 'hide'}>
                    notifiche
                </Popup>

                <button className="avatar-button" aria-label="avatar" onClick={() => this.setState({isLogged:false})} >
                    <img src={avatarImg} alt="avatar" className="avatar-circle" />
                </button>
            </div>
        )
    }
    renderIcons(){
        return (
            <div className="logged-container">
                <button className="more-button" aria-label="more" onClick={this.openMoreMenu}>
                    <MaterialIcon icon="more_vert" size="small"/>
                </button>
                <Popup visibility={this.state.isMoreMenuOpen ? "show" : "hide"}>
                    <ul>
                        <li>
                            <a>Tema scuro: disattivato</a>
                        </li>
                        <li>
                            <a>Lingua: italiano</a>
                        </li>
                        <li>
                            <a>Impostazioni</a>
                        </li>
                        <li>
                            <a>Guida</a>
                        </li>
                        <li>
                            <a>Invia feedback</a>
                        </li>
                    </ul>
                    <hr className="divider" />
                    <ul>
                        <li>
                            <a>Località Italia</a>
                        </li>
                        <li>
                            <a>Modalità con restrizioni: non attiva</a>
                        </li>
                    </ul>
                </Popup>


                <button className="login-button" aria-label="login" onClick={() => this.setState({isLogged:true})}>
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
        console.log("RENDER: ", this.state)
        return(
            <header className='header'>
                <div className="header-left">
                <button className="hamburger-menu" aria-label="">
                    <MaterialIcon icon="menu" size="small"/>
                </button>

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

                <div className="header-right" aria-label="" >
                     <button className="new-post-button" id="new-post" onClick={this.openNewpostMenu}>
                         <MaterialIcon icon="video_call" size="small"/>
                     </button>

                    <Popup visibility={this.state.isNewpostOpen ? "show" : "hide"}>
                        <ul>
                            <li>
                                <a>Carica video</a>
                            </li>
                            <li>
                                <a>Trasmetti dal vivo</a>
                            </li>
                        </ul>
                    </Popup>


                     <button className="apps-button" aria-label="" onClick={this.openAppsMenu} >
                        <MaterialIcon icon="apps" size="small"/>
                     </button>

                    <Popup visibility={this.state.isAppsMenuOpen ? "show" : "hide"}>
                        <ul>
                            <li>
                                <a>YouTube TV</a>
                            </li>
                            <li>
                                <a>YouTube Gaming</a>
                            </li>
                        </ul>
                        <hr className="divider" />
                        <ul>
                            <li>
                                <a>YouTube Music</a>
                            </li>
                            <li>
                                <a>YouTube Kids</a>
                            </li>
                        </ul>
                        <hr className="divider" />
                        <ul>
                            <li>
                                <a>Creator Academy</a>
                            </li>
                            <li>
                                <a>YouTube for Artist</a>
                            </li>
                        </ul>
                    </Popup>

                    {this.state.isLogged ?
                        this.renderLoggedIcons()  :
                         this.renderIcons()

                    }
                </div>
            </header>
        )
    }
}

export default Header;