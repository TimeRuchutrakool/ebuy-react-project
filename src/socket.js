import  io  from "socket.io-client";
import { BACKEND_URL } from "./config/env";

const socket = io.connect(BACKEND_URL,{reconnect:true});

export default socket;
