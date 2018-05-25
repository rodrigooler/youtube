import React from 'react';
import MaterialIcon from 'material-icons-react';
import Button from '../Button'
import './styles/notifications-popup.css';

const NotificationsMenu = () =>
   <div className="notification-menu">

   	<div className="notification-header">
		<span>Notifiche</span>
		<MaterialIcon icon="settings" size="small" />
   	</div>

   	<div className="notification-content">
		<ul className="item-list">
			<li className="item">
				<a href="">
					<img src="" alt="" className=""/>
					<div className="item-content">
						<span className="item-text">
						Jazz and Blues Experience ha caricato: The Greatest Jazz Standards - It Don't Mean a Thing, I Got Rhythm, All of Me...
						</span>
						<span className="item-date">7 mag 2018</span>
					</div>
					<img src="" alt="" className=""/>
					<Button iconName="more_vert" classStyle="" type="button"  />
				</a>
			</li>
		</ul>
   	</div>
   </div>

export default NotificationsMenu;
