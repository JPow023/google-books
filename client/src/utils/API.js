import axios from "axios";

export default {
    getBooks: function() {
        console.log("hit");

        return axios.get("/api/books");
    },
    saveBooks: function(bookData) {
        console.log(bookData);

        return axios.post("/api/books", bookData);
    },
    deleteBooks: function(id) {
        console.log(id);

        return axios.delete("/api/books/" + id);
    }
};