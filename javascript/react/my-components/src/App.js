import React from 'react';
// import BookList from './BookList'

// useStates
// import UseStateBasic from './hooks/useStates/useState-basics'
// import UseStateArray from './hooks/useStates/useState-array';
// import UseStateObject from './hooks/useStates/useState-object';
// import UseStateCounter from './hooks/useStates/useState-counter';

// useEffect
// import UseEffectBasic from './hooks/useEffects/useEffect-basic'
// import UseEffectCleanup from './hooks/useEffects/useEffect-cleanup';
import UseEffectFetch from './hooks/useEffects/useEffect-fetch'


function App(){
    return(
        <div className='containter'>
            <UseEffectFetch/>
        </div>
    );
}

export default App