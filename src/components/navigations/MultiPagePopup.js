
import React, { Component } from 'react';


class MultiPagePopup extends Component {
    constructor(props) {
        super(props);

       }

    render(){
        console.log("MULTI PAGE POPUP STYLE: ", this.props.style)
        return(
            <div className={this.props.visibility + ' popup ' + this.props.style}>
                {this.props.children}
            </div>
        )
    }

}

export default MultiPagePopup;