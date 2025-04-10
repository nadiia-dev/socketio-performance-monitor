export const socketMain = (io, pid) => {
  io.on("connection", (socket) => {
    let machineMacA;
    const auth = socket.handshake.auth;
    if (auth.token === "ksooqwpw32018182mdmmdi330303kksd") {
      socket.join("nodeClient");
    } else if (auth.token === "2910dk92scp02d11mdmmdi330303kksd") {
      socket.join("reactClient");
    } else {
      socket.disconnect();
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
