export const socketMain = (io) => {
  io.on("connection", (socket) => {
    console.log(`Someone connected to ${process.pid}`);
    socket.emit("welcome", "Welcome!");
  });
};
