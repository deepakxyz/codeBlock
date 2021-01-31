import React, {useState} from 'react';

const UseStateBasic = () => {
    const [title, setTitle] = useState('random title..')

    const handleClick = () => {
        if(title === 'random title..'){
        setTitle('Changed Title');
        }else{
            setTitle('random title..')
        }
    }
    return (
        <React.Fragment>
            <h1>{title}</h1>
            <button className='btn' onClick={handleClick}>Change Title</button>
        </React.Fragment>
    )
    
}

export default UseStateBasic;