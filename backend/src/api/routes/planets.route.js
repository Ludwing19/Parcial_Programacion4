
import { Router } from "express";
import { PlanetController } from "../controllers"; 
import { ValidateJwt } from "../middlewares/ValidateJWT";
export function PlanetRouter() {
  const planetController = new PlanetController();
  const router = Router();

  //Verbos de http
  //El primer parametro son las rutas
  //El segundo es el middlewere se encarga de validar si el JWT tiene un request
  //El tercer parametro es el coldback que se va ejecutar
  router.get("/", ValidateJwt, planetController.getAll);
  router.get("/:id", ValidateJwt, planetController.getOne);
  router.post("/", ValidateJwt, planetController.create);
  router.put("/:id", ValidateJwt, planetController.update);
  router.delete("/:id", ValidateJwt, planetController.delete);
  return router;
}
