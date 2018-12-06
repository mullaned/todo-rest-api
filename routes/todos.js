const express = require('express');
const router = express.Router();
let db = require('../models')

router.get('/', function(req, res){
    //find all todos
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.post('/', function(req, res){
    res.send("This is the post route")
})

module.exports = router;