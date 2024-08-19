import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';
function Test() {
    const [buttonText, setButtonText] = useState('Add to cart');
    const {count, setCount}=useContext(MyContext)
    const handleClick = () => {
        setButtonText(buttonText === 'Add to cart' ? 'Remove from cart' : 'Add to cart');
        if(buttonText === 'Add to cart'){
            setCount(count+1)
        }
        else{
            setCount(count-1)
        }
    };

    return (
        <div className='text-center'>
            <button className='btn btn-outline-secondary  ' onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Test;
