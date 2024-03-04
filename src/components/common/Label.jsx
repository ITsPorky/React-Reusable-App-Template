import React from 'react';

const Label = ({ className = '', Style, text }) => {
    return (
        <div className={`label ${className}`} style={Style}>
            <small>{text}</small>
        </div>
    );
}
 
export default Label;