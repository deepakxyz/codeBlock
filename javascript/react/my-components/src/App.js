import React from 'react';
// import BookList from './BookList'

// useStates
// import UseStateBasic from './hooks/useStates/useState-basics'
// import UseStateArray from './hooks/useStates/useState-array';
// import UseStateObject from './hooks/useStates/useState-object';
import UseStateCounter from './hooks/useStates/useState-counter';


function App(){
    return(
        <div className='containter'>
            <UseStateCounter/>
        </div>
    );
}

export default App