import React, {useState, useEffect} from 'react';

const CounterStorage = () => {
    const [count, setCount] = useState(() => 
     Number(window.localStorage.getItem('count') || 0)
     );
    const incrementCount = () => setCount(currentCount => currentCount + 1);
    useEffect(() => {
        window.localStorage.setItem('count', count);
    }, [count])
    return (
    <button onClick={() =>incrementCount()} className='counter-button-storage'>
        {count}
    </button>
    )
}
export default CounterStorage;