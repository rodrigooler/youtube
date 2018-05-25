import React from 'react';
import MaterialIcon from 'material-icons-react';
import languageIcon from '../../images/language.png';
import brightIcon from '../../images/brightness_medium.png';

const MoreMenu = () =>
    <React.Fragment>
    <ul>
        <li>
            <a>
                <img src={brightIcon} alt="luminosità tema"/>
                <span>Tema scuro: disattivato</span>
                <MaterialIcon icon="chevron_right" size="small"/>
            </a>
        </li>
        <li>
            <a>
                <img src={languageIcon} alt="lingua"/>
                <span>Lingua: italiano</span>
                <MaterialIcon icon="chevron_right" size="small"/>
            </a>
        </li>
        <li>
            <a>
                <MaterialIcon icon="settings" size="small"/>
                <span>Impostazioni</span>
            </a>
        </li>
        <li>
            <a>
                <MaterialIcon icon="help" size="small"/>
                <span>Guida</span>
            </a>
        </li>
        <li>
            <a>
                <MaterialIcon icon="feedback" size="small"/>
                <span>Invia feedback</span>
            </a>

        </li>
    </ul>
    <hr className="divider" />
        <ul>
            <li>
                <a>
                    <span>Località Italia</span>
                    <MaterialIcon icon="chevron_right" size="small"/>
                </a>
            </li>
            <li>
                <a>
                    <span>Modalità con restrizioni: non attiva</span>
                    <MaterialIcon icon="chevron_right" size="small"/>
                </a>
            </li>
        </ul>
    </React.Fragment>

export default MoreMenu;
