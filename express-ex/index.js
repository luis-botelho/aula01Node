const express = require('express'); //
const app = express();


app.get('/', function(req, res){
    res.send('Hello world!');
})
app.get('/blue', function(req, res){
    res.send('<h1>Frist route with node</h1>');
})




console.log('app is running')
app.listen(3000)