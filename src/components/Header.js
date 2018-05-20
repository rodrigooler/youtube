import React from 'react';
import MaterialIcon from 'material-icons-react';

class Header extends React.Component{

    render(){
        return(
            <header className='header'>

                <button>
                    <MaterialIcon icon="hamburger"/>
                </button>

            </header>
        )
    }
}

export default Header;