import io from "socket.io-client";
const options = {
  auth: { token: import.meta.env.VITE_AUTH_TOKEN },
};
const socket = io.connect(import.meta.env.VITE_SERVER_URL, options);

socket.on("welcome", (data) => {
  console.log(data);
});

export default socket;
