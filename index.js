let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');


let todoRoutes = require('./routes/todos.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req,res){
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("App is running on port " + port)
});