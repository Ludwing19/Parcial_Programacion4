import { Router } from "express"; 
import { ConstellationController } from "../controllers";
import { ValidateJwt } from "../middlewares/ValidateJWT";

export function ConstellationRouter() {
  const constellationController = new ConstellationController();
  const router = Router();
  router.get("/", ValidateJwt, constellationController.getAll);
  router.get("/:id", ValidateJwt, constellationController.getOne);
  router.post("/", ValidateJwt, constellationController.create);
  router.put("/:id", ValidateJwt, constellationController.update);
  router.delete("/:id", ValidateJwt, constellationController.delete);

  return router;
}
