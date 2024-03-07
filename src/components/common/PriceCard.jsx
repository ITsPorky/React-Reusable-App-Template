import React, {Children} from 'react';
import Button from './Button';

const PriceCard = ({children, id, Style, className = "", title = "Price Card Title" }) => {
    return (
        <div id={id} className={`price-card ${className}`} Style={Style}>
            <h3 className='title'>{title}</h3>
            <div className='content'>
                <ul>
                    {Children.map(children, (child) => {
                        return child;
                    })}
                </ul>
            </div>
            <Button className="w-full" type='secondary' text="Buy Now"/>
        </div>
    );
}
export default PriceCard;