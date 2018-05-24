import React from 'react';


import ball_icon from '../../ball_icon.jpg';
import music_icon from '../../music_icon.jpg';
import gamepad_icon from '../../gamepad_icon.jpg';
import live_icon from '../../live_icon.jpg';
import movie_icon from '../../movie_icon.jpg';
import news_icon from '../../news_icon.jpg';
import video_360_icon from '../../video_360_icon.jpg';

const TopChannelsNavigation = () =>
    <React.Fragment>
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
    </React.Fragment>

export default TopChannelsNavigation;