import React from 'react';
import './SearchBookDisplay.css';

const SearchBookDisplay = (props) => {
    return <div id="search-book-display">
    <br /><br />
        Title: {props.title}<br /><br />
        Author: {props.authors} <br /><br />
        Description: {props.description}<br /><br />
        Image: <img src={props.image} alt=""/><br /><br />
        Link: {props.link}<br /><br />

        <button onClick={props.saveBook}>Save Book</button>
    </div>
}

export default SearchBookDisplay;