export const socketMain = (io, pid) => {
  io.on("connection", (socket) => {
    let machineMacA;
    const auth = socket.handshake.auth;
    if (auth.token === process.env.AUTH_NODE_CLIENT_TOKEN) {
      socket.join("nodeClient");
    } else if (auth.token === process.env.AUTH_REACT_CLIENT_TOKEN) {
      socket.join("reactClient");
    } else {
      socket.disconnect();
      console.log("disconnected");
    }
    console.log(`Someone connected to ${process.pid}`);
    socket.emit("welcome", "Welcome!");

    socket.on("perfData", (perfData) => {
      if (!machineMacA) {
        machineMacA = perfData.macA;
        io.to("reactClient").emit("isConnected", {
          machineMacA,
          isAlive: true,
        });
      }
      io.to("reactClient").emit("perfData", perfData);
    });

    socket.on("disconnet", (reason) => {
      io.to("reactClient").emit("isConnected", { machineMacA, isAlive: false });
    });
  });
};
