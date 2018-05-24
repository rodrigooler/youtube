import React, {Component} from 'react';
import './sidemenu.css';
import MaterialIcon from 'material-icons-react';

import ball_icon from '../ball_icon.jpg';
import music_icon from '../music_icon.jpg';
import gamepad_icon from '../gamepad_icon.jpg';
import live_icon from '../live_icon.jpg';
import movie_icon from '../movie_icon.jpg';
import news_icon from '../news_icon.jpg';
import video_360_icon from '../video_360_icon.jpg';


class Sidemenu extends Component {
    render(){
        return(
            <div className={this.props.classStyle}>
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

                <hr className="divider" />

                <h3 className="sidemenu-title">IL MEGLIO DI YOUTUBE</h3>

                <nav>
                <ul className="navigation">
                    <li className="item">
                        <a >
                            <img src={music_icon} alt="Musica"  />
                            <span className="item-text"> Musica</span>

                        </a>
                    </li>

                    <li className="item">
                        <a>
                            <img src={ball_icon} alt="Sport"  />
                            <span className="item-text"> Sport</span>
                        </a>
                    </li>

                    <li className="item">
                        <a >
                            <img src={gamepad_icon} alt="Games"  />
                            <span className="item-text"> Giochi</span>
                        </a>
                    </li>

                    <li className="item">
                        <a >
                            <img src={movie_icon} alt="Movie"  />
                            <span className="item-text"> Film</span>
                        </a>
                    </li>

                    <li className="item">
                        <a >
                            <img src={movie_icon} alt="TV"  />
                            <span className="item-text"> Programmi TV</span>
                        </a>
                    </li>

                    <li className="item">
                        <a >
                            <img src={news_icon} alt="News"  />
                            <span className="item-text"> Notizie</span>
                        </a>
                    </li>
                    <li className="item">
                        <a >
                            <img src={live_icon} alt="Live"  />
                            <span className="item-text"> Dal vivo</span>
                        </a>
                    </li>

                    <li className="item">
                        <a >
                            <img src={video_360_icon} alt="Video 360"  />
                            <span className="item-text"> Video a 360 gradi</span>
                        </a>
                    </li>
                </ul>
                </nav>
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
                    <button className="login-button">ACCEDI</button>
                </div>

                <hr className="divider"/>

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
            </div>
        )
    }

}

export default Sidemenu;