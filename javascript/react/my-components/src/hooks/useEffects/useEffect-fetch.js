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