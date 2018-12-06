const mongoose = require('mongoose');

mongoose.set('debug', true);

// Connect mongoose
mongoose.connect('mongodb://dbUser:'+ process.env.MONGO_ATLAS_PW +'@todoapi-x6rgb.mongodb.net/test?retryWrites=true');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');


