# useEffect

### useEffectBasics
```javascript
import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
```

### useEffect Cleanup
Cleanups the window event listner
```javascript
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
```

###  useEffect Fetch
```javascript
import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetch= () => {
    const [users,setUsers] = useState([]);

    const getUsers = async() => {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users);
        // console.log(users);
    };

    useEffect(()=> {
        getUsers();
    },[]);
    return <>
    <h3>GitHub Users</h3>
    {users.map((user)=> {
        const {id,login,avatar_url,html_url} = user;
        return <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
            </div>
        </li>
    })}
    </>
}

export default UseEffectFetch;
```


