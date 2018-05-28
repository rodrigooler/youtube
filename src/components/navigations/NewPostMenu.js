import React from 'react';
import loadIcon from '../../images/load-video.png';
import liveBroadcastIcon from '../../images/live-broadcast.png';

const NewPostMenu = () =>
    <ul className="apps-menu-container">
        <li>
           
                <img src={loadIcon} alt="carica video"/>
                <span>Carica video</span>
           
        </li>
        <li>
           
                <img src={liveBroadcastIcon} alt="trasmetti dal vivo"/>
                <span>Trasmetti dal vivo </span>
            
        </li>
    </ul>


export default NewPostMenu;