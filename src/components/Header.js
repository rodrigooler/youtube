import React from 'react';
import MaterialIcon from 'material-icons-react';
import logoPath from '../youtube_logo.png';


class Header extends React.Component{

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
                     <button className="new-post-button">
                         <MaterialIcon icon="video_call" size="small"/>
                     </button>

                     <button className="apps-button" aria-label="" >
                        <MaterialIcon icon="apps" size="small"/>
                     </button>


                    <button className="more-button" aria-label="" >
                        <MaterialIcon icon="more_vert" size="small"/>
                    </button>

                    <button className="login-button">
                        ACCEDI
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;