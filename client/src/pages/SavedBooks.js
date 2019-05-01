
import React, { Component } from "react";
import NavBar from '../components/NavBar';
import SavedBookDisplay from '../components/SavedBookDisplay';
import API from "../utils/API";

class SavedBooks extends Component {
    state = {
        books: [],
    };

    componentDidMount = () => {
        this.getBook();
    }

    getBook = (req, res) => {
        API.getBooks({
        })
        .then(res => this.setState({ books: res.data }))
        .then(() => console.log(this.state.books))
        .catch(err => console.log(err));
    }

    deleteBook = id => {
        console.log("functioning");
        
        API.deleteBooks(id)
        .then(res => this.getBook())
        .catch(err => console.log(err));
    }

    render() {
    return (
        <div id="saved-books">
            <NavBar />
            <SavedBookDisplay
                books = {this.state.books}
                deleteBook = {this.deleteBook}
            />
        </div>
    )
    }
}
export default SavedBooks;