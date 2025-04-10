import io from "socket.io-client";
const options = {
  auth: { token: "2910dk92scp02d11mdmmdi330303kksd" },
};
const socket = io.connect("http://localhost:3000", options);

socket.on("welcome", (data) => {
  console.log(data);
});

export default socket;
