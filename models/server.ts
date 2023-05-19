// Servidor de Express
import express from "express";
import http from "http";
import socketio from "socket.io";
import path from "path";
import cors from "cors";
import { Sockets } from "./sockets";

export class Server {
  private readonly app: express.Application;
  private readonly port: string;
  private readonly server: http.Server;
  private readonly io: socketio.Server;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.server = http.createServer(this.app);

    this.io = new socketio.Server(this.server, {
      /* configuraciones */
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
  }
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();
    this.configurarSockets();

    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}
