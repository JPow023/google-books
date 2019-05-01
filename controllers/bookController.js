const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("hit again");
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body);
        db.Book            
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    remove: function(req, res) {
        console.log("hit remove route");

        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    }
}