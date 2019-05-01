import React from 'react';
import Book from '../Book';

const SavedBookDisplay = (props) => {
    return (
        <div id="saved-book-display">
            <list>
                {props.books.map(book =>
                    <Book key={book._id}
                    book={book}

                    deleteBook = {props.deleteBook}
                    />
                )}
            </list>
        </div>
    )
}

export default SavedBookDisplay;