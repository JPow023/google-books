import React from 'react';
import './book.css';
import DeleteButton from '../DeleteButton';

const Book = (props) => {
    return (
        <div id="book">
        <br />
            title: {props.book.title} <br />
            author: {props.book.authors} <br />
            description: {props.book.description} <br />
            image: <img alt="" src={props.book.image} /> <br /> <br />
            link: {props.book.link} <br />
            <DeleteButton 
                deleteBook = {props.deleteBook}
                book = {props.book}
            />
            <br /><br />
        </div>
    )
}

export default Book;