import React from 'react';
import MaterialIcon from 'material-icons-react';

const Button = ({type, classStyle, func, iconName, ariaLabel}) =>
    <button type={type} className={classStyle} aria-label={ariaLabel} onClick={func} >
        <MaterialIcon icon={iconName} size="small"/>
    </button>

export default Button;