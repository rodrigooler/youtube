import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import Button from '../Button'
import './styles/notifications-popup.css';
import circleImg from '../../images/notifica-img-1.jpg';
import eventImg from '../../images/hqdefault.jpg'


class NotificationsMenu extends Component {
	mouseEnter(e){
		console.log("on mouse over",e)
	}
	mouseOver(e){
		/* display icon*/
	}
	render(){
		return(
				 <div className="notification-menu">

	   				<div className="notification-header">
						<span>Notifiche</span>
						
						<Button iconName="settings" type="button" classStyle=""/>
						
	   				</div>

	   			
					<ul className="item-list">

						<li className="item" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
							
								<img src={circleImg} alt="" className="item-circle"/>
								<div className="item-content">
									<span className="item-text">
									Jazz and Blues Experience ha caricato: The Greatest Jazz Standards - It Don't Mean a Thing, I Got Rhythm, All of Me...
									</span>
									<span className="item-date">7 mag 2018</span>
								</div>
								<img src={eventImg} alt="" className="item-img"/>
								<Button iconName="more_vert" classStyle="item-more-btn" type="button"  />
							
						</li>

						<li className="item" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
							
								<img src={circleImg} alt="" className="item-circle"/>
								<div className="item-content">
									<span className="item-text">
									Jazz and Blues Experience ha caricato: The Greatest Jazz Standards - It Don't Mean a Thing, I Got Rhythm, All of Me...
									</span>
									<span className="item-date">7 mag 2018</span>
								</div>
								<img src={eventImg} alt="" className="item-img"/>
								<Button iconName="more_vert" classStyle="item-more-btn" type="button"  />
							
						</li>


					</ul>

	   			
	   		</div>
				)
	}
  
}
export default NotificationsMenu;
