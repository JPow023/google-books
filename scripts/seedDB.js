const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "test",
        authors: "test",
        description: "test",
        image: "test",
        link: "test"
    },
    {
        title: "test-two",
        authors: "test-two",
        description: "test-two",
        image: "test-two",
        link: "test-two"
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.results.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });