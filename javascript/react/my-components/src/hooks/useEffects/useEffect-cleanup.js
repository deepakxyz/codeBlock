import React, {useState, useEffect} from 'react';

const UseEffectCleanup = () => {

    const [size,setSize] = useState(window.innerWidth);
    console.log(size);

    //check size callback func
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    // useEffect is active when there is a resize in the window and call the callback func
    useEffect(()=>{
        window.addEventListener('resize', checkSize);
        return ()=> {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);
        }
    })

    return <>
    <h2>UseEffectCleanup</h2>
    <h1>Window</h1>
    <h3>{size}:px</h3>
    </>
}

export default UseEffectCleanup;