import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(currentCount => currentCount + 1);
    return (
    <button onClick={() =>incrementCount()} className='counter-button'>
        {count}
    </button>
    )
}
export default Counter;