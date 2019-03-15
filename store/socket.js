import io from "socket.io-client";

const socket = io("http://localhost:19002");
socket.connect();

export default socket;