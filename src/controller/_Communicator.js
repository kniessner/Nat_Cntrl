let socket = io.connect();

socket.on('connect', function(data) {
console.log("connected with "+socket.id);
socket.emit('join', 'hello world from the client!');
});

socket.on('news', function (data) {
  console.log(data);
});
