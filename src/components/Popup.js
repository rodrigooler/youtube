
import React, { Component } from 'react';


class Popup extends Component {
    constructor(props) {
        super(props);

       }

    render(){
        
        return(
            <div className={this.props.visibility + ' popup ' + this.props.style}>
                {this.props.children}
            </div>
        )
    }

}

export default Popup;