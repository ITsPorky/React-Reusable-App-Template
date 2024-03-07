import React from 'react';

const TopBar = ({id, Style, className = "", text="Example Text..."}) => {
    return (
        <div className={`topbar text-center py-2 px-2 ${className}`}>
            <b>{text}</b>
        </div>
    );
}
 
export default TopBar;