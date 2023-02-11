import io from "socket.io-client"

const wsServer = "http://localhost:8088";

const socket = io(wsServer);

export default socket;