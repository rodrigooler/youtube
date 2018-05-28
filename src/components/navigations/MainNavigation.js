import React from 'react';
import MaterialIcon from 'material-icons-react';

const  MainNavigation = () =>
    <nav>
        <ul className="navigation">

            <li className="item">
                <a >
                    <MaterialIcon icon="home" size="small"/>
                    <span className="item-text"> Home</span>

                </a>
            </li>
            <li className="item">
                <a>
                    <MaterialIcon icon="whatshot" size="small" className="icon"/>
                    <span className="item-text"> Tendenze</span>
                </a>
            </li>
            <li className="item">
                <a >
                    <MaterialIcon icon="history" size="small"/>
                    <span className="item-text"> Cronologia</span>

                </a>
            </li>
        </ul>
    </nav>

export default  MainNavigation;