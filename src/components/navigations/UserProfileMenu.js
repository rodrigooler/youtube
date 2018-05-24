import React from 'react';
import './styles/user-profile-popup.css';

const UserProfileMenu = ({logOut,  children}) =>
    <React.Fragment>
        <div className="user-profile-header">
            <div className="user-profile-header-left">
                {children}
            </div>
            <div className="user-profile-header-right">
                <div>davide mezzetti</div>
                <div>davide.mezzetti83@gmail.com</div>
            </div>

        </div>
        <ul>
            <li>
                <a>Il mio canale</a>
            </li>
            <li>
                <a>Creator Studio</a>
            </li>
            <li>
                <a>Cambia account</a>
            </li>
            <li onClick={logOut}>
                <a >Esci</a>
            </li>
        </ul>
        <hr className="divider" />
        <ul>
            <li>
                <a>Tema scuro: disattivato</a>
            </li>
            <li>
                <a>Lingua Italiano</a>
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
                    <a>Modalità con restrizione: non attiva</a>
                </li>
            </ul>
    </React.Fragment>

export default UserProfileMenu;