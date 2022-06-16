import { Router } from "express";  //Esto nos va retornar todas las rutas de api ya con un middlewere

//Estas son todas las rutas creadas
import { UserRouter } from "./user.routes"; //Usuarios
import { PlanetRouter } from "./planets.route"; //Planetas
import { StartRouter } from "./stars.route"; //Estrellas
import { ConstellationRouter } from "./constellations.route"; //Constelaciones


function routes() {
  const routerApi = Router();
  const routes = Router();
 
  routes.use("/users", UserRouter());
  routes.use("/planets", PlanetRouter());
  routes.use("/stars", StartRouter());
  routes.use("/constellations", ConstellationRouter());
  routerApi.use("/api", routes);
 
  return routerApi;
}

export { routes };
