import React from 'react';
import './css/BookList.css'

// setup variable data
const books = [
    {
        img: 'https://cdna.artstation.com/p/assets/images/images/034/298/052/20210129071741/smaller_square/jelle-van-der-vegt-210117-flying8-01.jpg?1611926261',
        name: 'Youshima',
        type: '2d',
        creator: 'Amelia Hepworth',
        id:1
    },
    {
        img: 'https://cdnb.artstation.com/p/assets/covers/images/034/316/651/smaller_square/erik-stitt-freelance-artist-erik-stitt-freelance-artist-traffic-tunnels-ig.jpg?1611964154',
        name: 'Karl Kaponski',
        type: '2d',
        creator: 'Amelia Hepworth',
        id:2
    },
    {
        img:'https://cdna.artstation.com/p/assets/covers/images/033/459/514/smaller_square/maciej-rebisz-maciej-rebisz-updates-thumbnail-001.jpg?1609687051',
        name: 'Adam Farter',
        type: '2d',
        creator: 'Shannon Olsen',
        id:3
    }

]

function BookList(){
    return(
        <>
        <section className='booklist'>
            {books.map((book)=> {
                return (
                    <Book key= {book.id} {...book}></Book>
                )
            })}
        </section>
        </>
    );
}

const Book = (props) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World')
    }
    const getCreator = (creator) => {
        console.log(creator);
    }
    const {img, name, type, creator} = props;
    return (
        <article className='book' onMouseOver={()=>{
            console.log(name);
        }}>
            <img src={img} alt='' />
            <h1>{name}</h1>
            <h4>{type}</h4>
            <h4>{creator}</h4>
            <button type='button' onClick={clickHandler}>Click</button>
            <button type='button' onClick={() => getCreator(creator)}>More Complex</button>
        </article>
    );
}

export default BookList