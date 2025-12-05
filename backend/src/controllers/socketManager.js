import { Server } from "scoket.io";

let connections = {}
let message = {}

export const connectToSocket = (server) =>{
    const io = new Server(server);
    return io;
}