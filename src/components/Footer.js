import React from 'react';
import MaterialIcon from 'material-icons-react';

const Footer = () =>
    <React.Fragment>
        <ul className="navigation">

            <li className="item">
                <a >
                    <MaterialIcon icon="settings" size="small"/>
                    <span className="item-text"> Impostazioni</span>
                </a>
            </li>

            <li className="item">
                <a >
                    <MaterialIcon icon="flag" size="small"/>
                    <span className="item-text"> Cronologia segnalazioni</span>
                </a>
            </li>

            <li className="item">
                <a >
                    <MaterialIcon icon="help" size="small"/>
                    <span className="item-text"> Guida</span>
                </a>
            </li>

            <li className="item">
                <a >
                    <MaterialIcon icon="feedback" size="small"/>
                    <span className="item-text"> Invia feedback</span>
                </a>
            </li>
        </ul>

        <hr className="divider" />

        <ul className="sidemenu-footer-menu">
            <li>
                <a>Informazioni</a>
            </li>
            <li>
                <a>Stampa</a>
            </li>
            <li>
                <a>Copyright</a>
            </li>
            <li>
                <a>Creators</a>
            </li>
            <li>
                <a>Pubblicità</a>
            </li>
            <li>
                <a>Sviluppatori</a>
            </li>
            <li>
                <a>+Youtube</a>
            </li>
        </ul>

        <ul className="sidemenu-footer-menu">
            <li>
                <a>Terms</a>
            </li>
            <li>
                <a>Privacy</a>
            </li>
            <li>
                <a>Norme e sicurezza</a>
            </li>
            <li>
                <a>Prova le nuove funzioni</a>
            </li>
        </ul>


        <div className="footer-copyright">
            2018 YouTube, LLC
        </div>
    </React.Fragment>

export default Footer;