const express = require('express')
const app = express()
const path = require('path')
var port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })    
})

app.get('/articulo', function(req, res) {
    res.sendFile('articulo.html', {
        root: path.join(__dirname, './')
    })  
})

app.get('/bootstrap', function(req, res){
    res.sendFile('bootstrap.html', {
        root: path.join(__dirname, './')
    })  
})

app.listen(port, () => console.log(`App listening on port ${port}!`))