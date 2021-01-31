import React, {useState} from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    // complex increase
    const complexIncrease = () => {
        setTimeout(()=>{
            // setValue(value + 1);
            setValue((prevState)=>{
                return prevState + 1;
            })
        },1000)
    }
    return <>
    <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button onClick={()=> setValue(value-1)}>decrease</button>
        <button onClick={()=> setValue(0)}>rest</button>
        <button onClick={()=> setValue(value + 1)}>increase</button>
    </section>

    <section id='complex-counter'>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>increase later</button>
        
    </section>
    </>
};

export default UseStateCounter;