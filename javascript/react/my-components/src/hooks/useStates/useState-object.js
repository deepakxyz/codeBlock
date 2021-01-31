import React , {useState} from 'react';

const UseStateObject = () => {
    const [person,setPerson] = useState({name:'peter',age:24,msg:"Radom message"});
    const changeMessage = () => {
        setPerson({...person, msg:'hello world'});
    };
    return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.msg}</h3>
    <button className='btn' onClick={changeMessage}>Change Msg</button>
    </>
};

export default UseStateObject;