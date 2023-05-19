import socketio from "socket.io";
import { BandList } from "./band-list";

export class Sockets {
  
  private bandList; 

  constructor(public io: socketio.Server) {
    this.io = io;
    this.socketEvents();
    this.bandList = new BandList();
  }

  socketEvents() {
    this.io.on("connection", ( socket ) => {
      console.log("Client connected");
      socket.emit("current-bands", this.bandList.getBands());
    });
  }
}
