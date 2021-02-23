const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);

app.use(express.static('public'))

app.get('/page', function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/axios', function(req,res){
  res.send("axios is working!");
})

//socket io
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('connect');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});