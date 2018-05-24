import React, {Component} from 'react';
import './sidemenu.css';
import MaterialIcon from 'material-icons-react';

import MainNavigation from './navigations/MainNavigation';
import TopChannelsNavigation from './navigations/TopChannelsNavigation';
import UserCollections from './navigations/UserCollections';
import UserSubscriptions from './navigations/UserSubscriptions';
import Footer from './Footer';


class SideMenu extends Component {

    renderMenuUserLogged(){
        return(
            <React.Fragment>
                <UserCollections />
                <UserSubscriptions />
                <Footer />
            </React.Fragment>
        )
    }

    renderMenu(){
        return(
            <React.Fragment>
                <TopChannelsNavigation />

                <hr className="divider"/>

                <ul className="navigation">
                    <li className="item">
                        <a >
                            <MaterialIcon icon="history" size="small"/>
                            <span className="item-text"> Sfoglia canali</span>
                        </a>
                    </li>
                </ul>

                <hr className="divider"/>

                <div className="login-section">
                    <h3>  Accedi ora per vedere i tuoi canali e i consigli.</h3>
                    <button className="login-button" onClick={this.props.logIn}>ACCEDI</button>
                </div>

                <hr className="divider"/>

                <Footer />
            </React.Fragment>
        )
    }
    render(){
        return(
            <div className={this.props.classStyle}>

                <MainNavigation/>

                <hr className="divider" />

                {this.props.isLogged ?  this.renderMenuUserLogged() : this.renderMenu()}

            </div>
        )
    }

}

export default SideMenu;