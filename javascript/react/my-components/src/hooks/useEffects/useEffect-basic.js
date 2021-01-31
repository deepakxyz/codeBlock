import React, {useState, useEffect} from 'react';

const UseEffectBasic = () => {
    const [value, setValue] = useState(0);
    useEffect(()=> {
        console.log('Call useEffect');
        if (value > 1){
        document.title = `New Messages(${value})`;
        }
    },[value]);
    return <>
    <h2>UseEffect Basics</h2>
    <h1>{value}</h1>
    <button onClick={()=> setValue(value + 1)}>Increase</button>
    </>

};

export default UseEffectBasic;

