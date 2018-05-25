import React from 'react';

import youtubeTvIcon from '../../images/youtube-tv.png';
import musicIcon from '../../images/youtube-music.png';
import gamingIcon from '../../images/gaming.png';
import kidsIcon from '../../images/kids.png';
import youtubeIcon from '../../images/youtube.png';

const AppsMenu = () =>
    <React.Fragment>
    <ul>
        <li>
            <a>
                <img src={youtubeTvIcon} alt="youtube tv" />
                <span> YouTube TV</span>
            </a>
        </li>
        <li>
            <a>
                <img src={gamingIcon} alt="Youtube Gaming" />
                <span>YouTube Gaming</span>
            </a>
        </li>
    </ul>
    <hr className="divider" />
    <ul>
        <li>
            <a>
                <img src={musicIcon} alt="YouTube Music" />
                <span>YouTube Music</span>
            </a>
        </li>
        <li>
            <a>
                <img src={kidsIcon} alt="YouTube Kids" />
                <span>YouTube Kids</span>
            </a>
     </li>
    </ul>
    <hr className="divider" />
    <ul>
        <li>
            <a>
                <img src={youtubeIcon} alt="Creator Academy" />
                <span>Creator Academy</span>
            </a>
        </li>
        <li>
            <a>
                <img src={youtubeIcon} alt="YouTube for Artist" />
                <span>YouTube for Artist</span>
            </a>
        </li>
    </ul>
    </React.Fragment>

export default AppsMenu;