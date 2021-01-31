# useStates
returns,  Array [ "Value", dispatchAction() ]
useState is a function it returns a value and a function

### UseStateBasic
Change the title from 'random title' to 'changed tilte' and back and forth.
```javascript 
import React, {useState} from 'react';

  

const UseStateBasic \= () \=> {

 const \[title, setTitle\] \= useState('random title..')

  

 const handleClick \= () \=> {

 if(title \=== 'random title..'){

 setTitle('Changed Title');

 }else{

 setTitle('random title..')

 }

 }

 return (

 <React.Fragment\>

 <h1\>{title}</h1\>

 <button className\='btn' onClick\={handleClick}\>Change Title</button\>

 </React.Fragment\>

 )

}

export default UseStateBasic;
```

### UseStateArray

```javascript
import React, {useState} from 'react'

const data = [
    {id :1, name:'Banner'},
    {id: 2, name:"Peter"},
    {id: 3, name:"Parker"},
    {id: 4, name:"Bruce"}
];

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter((person)=> person.id !== id);
        setPeople(newPeople);
    }

    return <>
    {
        people.map((person)=> {
            const {id,name} = person;
            return (
                <div key={id}>
                    <h4>{name}</h4>
                    <button onClick={()=> removeItem(id)}>Remove</button>
                </div>
            );
        })
    }
    <button className="btn" onClick={()=> setPeople([])}>Clear Items</button>
    </>;
}

export default UseStateArray;
```

### UseState Objects
```javascript
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
```