
import React, { Component } from 'react';
import './card.css';

class Card extends Component{

    render(){
        return(
            <div className="card">
                <div className="thumbnaill">
                    preview image
                </div>
                <div className="details">

                    <h3 className="details-title">LA SERIE A VA A SCUOLA - La fine dell'anno</h3>

                    <div className="metadata">
                        <span className="metadata-line"> Gli autogol</span>
                        <span className="metadata-line">1 Mln visualizzazioni</span>
                        <span className="metadata-line">3 giorni fa</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;