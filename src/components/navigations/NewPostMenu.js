import React from 'react';
import loadIcon from '../../images/load-video.png';
import liveBroadcastIcon from '../../images/live-broadcast.png';

const NewPostMenu = () =>
    <ul>
        <li>
            <a>
                <img src={loadIcon} alt="carica video"/>
                <span>Carica video</span>
            </a>
        </li>
        <li>
            <a>
                <img src={liveBroadcastIcon} alt="trasmetti dal vivo"/>
                <span>Trasmetti dal vivo </span>
            </a>
        </li>
    </ul>


export default NewPostMenu;