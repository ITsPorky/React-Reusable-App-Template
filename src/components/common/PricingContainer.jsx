import React, {Children} from 'react';

const PricingContainer = ({children}) => {
    return (
        <div className='pricing-container'>
            {Children.map(children, child => {
                return child;
            })}
        </div>
    );
}
export default PricingContainer;