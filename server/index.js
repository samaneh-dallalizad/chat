const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const productRouter = require('./routes/products')
//const http = require('http');
const port = 4000
const server=app.listen(port, () => console.log(`listening on port ${port}!`))


app.use(bodyParser.json())
app.use(cors())
app.use(productRouter)


//socket

const io = require('socket.io')(server);
io.on('connection', function (socket) {

    console.log("socket connection",socket.id)

    socket.on('chat',function(data){
      io.sockets.emit('chat',data)
    })

    socket.on('typing',function(data){
      socket.broadcast.emit('typing',data)
    })

  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});


// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

//static file
app.use(express.static('public'))

