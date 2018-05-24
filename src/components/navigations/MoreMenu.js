import React from 'react';


const MoreMenu = () =>
    <React.Fragment>
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
    </React.Fragment>

export default MoreMenu;
