import React from 'react';

import './styles/apps-menu.css'
import youtubeTvIcon from '../../images/youtube-tv.png';
import musicIcon from '../../images/youtube-music.png';
import gamingIcon from '../../images/gaming.png';
import kidsIcon from '../../images/kids.png';
import youtubeIcon from '../../images/youtube.png';


/* all the items are link */
const AppsMenu = () =>
    <React.Fragment>
    <ul className="apps-menu-container">
        <li>
           
                <img src={youtubeTvIcon} alt="youtube tv" />
                <span> YouTube TV</span>
            
        </li>
        <li>
           
                <img src={gamingIcon} alt="Youtube Gaming" />
                <span>YouTube Gaming</span>
            
        </li>
    </ul>
    <hr className="divider" />
    <ul className="apps-menu-container">
        <li>
           
                <img src={musicIcon} alt="YouTube Music" />
                <span>YouTube Music</span>
           
        </li>
        <li>
          
                <img src={kidsIcon} alt="YouTube Kids" />
                <span>YouTube Kids</span>
            
     </li>
    </ul>
    <hr className="divider" />
    <ul className="apps-menu-container">
        <li>
           
                <img src={youtubeIcon} alt="Creator Academy" />
                <span>Creator Academy</span>
            
        </li>
        <li>
            
                <img src={youtubeIcon} alt="YouTube for Artist" />
                <span>YouTube for Artist</span>
            
        </li>
    </ul>
    </React.Fragment>

export default AppsMenu;