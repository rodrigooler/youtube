import React from 'react';
import MaterialIcon from 'material-icons-react';
import logoPath from '../youtube_logo.png';
import avatarImg from '../photo.jpg'
import './header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged:false,
            isPopupOpen:false
        }
        this.openPopup = this.openPopup.bind(this);
    }


    renderLoggedIcons(){
        return(
            <div className="logged-container">
                <button className="notification-button" aria-label="notification" >
                     <MaterialIcon icon="notifications" size="small"/>
                </button>
                <button className="avatar-button" aria-label="avatar" onClick={() => this.setState({isLogged:false})} >
                    <img src={avatarImg} alt="avatar" className="avatar-circle" />
                </button>
            </div>
        )
    }
    renderIcons(){
        return (
            <div className="logged-container">
                <button className="more-button" aria-label="more" >
                    <MaterialIcon icon="more_vert" size="small"/>
                </button>
                <button className="login-button" aria-label="login" onClick={() => this.setState({isLogged:true})}>
                    ACCEDI
                </button>
            </div>
        )
    }
    /* open load video or post popup */
    openPopup(){
        this.setState({isPopupOpen:true})
    }

    renderPopup(){
        return(
            <div className="popup">
                <ul>
                    <li>
                        <a>Carica video</a>
                    </li>
                    <li>
                        <a>Trasmetti dal vivo</a>
                    </li>
                </ul>
            </div>
        )
    }

    render(){

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
                     <button className="new-post-button" onClick={this.openPopup}>
                         <MaterialIcon icon="video_call" size="small"/>
                     </button>

                    {this.state.isPopupOpen ? this.renderPopup() : ''}

                     <button className="apps-button" aria-label="" >
                        <MaterialIcon icon="apps" size="small"/>
                     </button>

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