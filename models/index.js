const mongoose = require('mongoose');

// mongoose.set('debug', true);
// console.log(process.env.MONGO_ATLAS_PW);
// Connect mongoose
mongoose.connect('mongodb://dbUser:blabla1@todoapi-shard-00-00-x6rgb.mongodb.net:27017,todoapi-shard-00-01-x6rgb.mongodb.net:27017,todoapi-shard-00-02-x6rgb.mongodb.net:27017/test?ssl=true&replicaSet=todoapi-shard-0&authSource=admin&retryWrites=true',{useMongoClient: true});

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


