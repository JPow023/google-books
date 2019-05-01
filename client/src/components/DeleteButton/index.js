import React from 'react';

const DeleteButton = (props) => {
    return (
        <div>
            <button onClick={() => props.deleteBook(props.book._id)}>delete</button>
        </div>
    )
}

export default DeleteButton;