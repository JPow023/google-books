import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return <div id="search-bar-div">
        <form onSubmit= {props.handleSubmit}>
            Search Books: <input id="search-bar" type="text" onChange={props.handleChange} /><br />
            <input type="submit" value="submit"></input>
        </form>
    </div>
}

export default SearchBar;