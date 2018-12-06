let express = require('express');
let app = express();
let port = process.env.PORT || 3000;


app.get('/', function(req,res){
    res.send("Hi from express");
})

app.listen(port, function(){
    console.log("App is running on port " + port)
});