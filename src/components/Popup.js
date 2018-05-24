
import React, { Component } from 'react';


class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: props.style || ''
            }
        }

    render(){

        return(
            <div className={this.props.visibility + ' popup ' + this.state.style}>
                {this.props.children}
            </div>
        )
    }

}

export default Popup;