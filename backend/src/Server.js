import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import path from "path";
import { routes } from "./api/routes";
   
//aqui se configuran los middleweres de todas las rutas configuramos express 
export default class Server { 
  constructor() {
    this._express = express(); 
    this.Middlewares(); 
    this._express.use(routes()); 
  }

  Middlewares() {
    this._express.use(cors());
    this._express.use(helmet());
    this._express.use(compression());
    this._express.use(express.json());
    this._express.use(morgan("dev"));
  }

  Start() {
    return new Promise((resolve) => {
      const http = this._express.listen(3001, () => {
        const { port } = http.address();
        console.log(`App running in port ${port}`);
      });
      resolve();
    });
  }
}
