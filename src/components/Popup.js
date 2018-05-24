
import React, { Component } from 'react';

class Popup extends Component {
    render(){
        return(
            <div className={this.props.visibility + " popup"}>
                {this.props.children}
            </div>
        )
    }

}

export default Popup;