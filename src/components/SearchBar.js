import React from 'react';
import Button from './Button'

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render(){
        return(
             <form  onSubmit={this.handleSubmit} className="search-bar">
                <input type="text" value={this.state.value} onChange={this.handleChange} className="search-input" placeholder="Cerca"/>

                <Button type="submit" iconName="search" className="search-button" ariaLabel="search" />
             </form>

        )
    }

}

export default SearchBar;