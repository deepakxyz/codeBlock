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