module.exports = socketServer => {
  socketServer.on("connection" , socket => {
    socket.on("sendCode" , code => {
      socketServer.emit("receiveCode" , code );
    })
  });
}
