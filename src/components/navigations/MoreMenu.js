import React from 'react';
import MaterialIcon from 'material-icons-react';
import languageIcon from '../../images/language.png';
import brightIcon from '../../images/brightness_medium.png';

import './styles/multi-page-popup.css';

class MoreMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            language : 'italiano',
            blackTheme: 'disattivato',
            location: 'Italia',
            restrizioni : 'non attiva'
        }
    }
    render(){
        return (
             <React.Fragment>
                <ul>
                    <li className="item">
                        
                            <img src={brightIcon} alt="luminosità tema"/>
                            <span>Tema scuro: {this.state.blackTheme}</span>
                            <MaterialIcon icon="chevron_right" size="small"/>
                        
                    </li>
                    <li className="item">
                            <img src={languageIcon} alt="lingua"/>
                            <span>Lingua: {this.state.language}</span>
                            <MaterialIcon icon="chevron_right" size="small"/>
                       
                    </li>
                    <li className="item">
                            <MaterialIcon icon="settings" size="small"/>
                            <span>Impostazioni</span>
                       
                    </li>
                     <li className="item">
                            <MaterialIcon icon="help" size="small"/>
                            <span>Guida</span>
                    </li>
                    <li className="item">
                            <MaterialIcon icon="feedback" size="small"/>
                            <span>Invia feedback</span>

                    </li>
                </ul>
                <hr className="divider" />
                    <ul>
                        <li className="item">
                                <span className="text-color">Località {this.state.location}</span>
                                <MaterialIcon icon="chevron_right" size="small"/>
                        </li>
                        <li className="item">
                                <span className="text-color">Modalità con restrizioni: {this.state.restrizioni}</span>
                                <MaterialIcon icon="chevron_right" size="small"/>
                        </li>
                    </ul>
                </React.Fragment>
                        )
                }
               

}

export default MoreMenu;
