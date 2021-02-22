const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'))

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
    //__dirname : It will resolve to your project folder.
  });
 
app.listen(3000, ()=> {
    console.log('listen on 3000')
})