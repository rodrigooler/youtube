import React from 'react';
import MaterialIcon from 'material-icons-react';
import logoPath from '../youtube_logo.png'
class Header extends React.Component{

    render(){
        return(
            <header className='header'>

                <button className="hamburger-menu">
                    <MaterialIcon icon="menu" size="small"/>
                </button>

                <div className="logo-container">
                    <img className="logo-img" src={logoPath} alt="youtube logo" />
                </div>

                <div className="search-bar">
                    <input className="search-input"/>
                    <button className="search-button">
                        <MaterialIcon icon="search" size="small"/>
                    </button>
                </div>

                <button className="new-post-button">
                    <MaterialIcon icon="video_call" size="small"/>
                </button>

                <button className="apps-button">
                    <MaterialIcon icon="apps" size="small"/>
                </button>

                <button className="notification-button">
                    <MaterialIcon icon="notification" size="small"/>
                </button>

                <button className="account-circle">
                    <MaterialIcon icon="account_circle" size="small"/>
                </button>

            </header>
        )
    }
}

export default Header;