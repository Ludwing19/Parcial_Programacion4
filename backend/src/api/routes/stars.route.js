import { Router } from "express";
import { StarsController } from "../controllers";
import { ValidateJwt } from "../middlewares/ValidateJWT"; 
export function StartRouter() {
  const starsController = new StarsController();
  const router = Router();
  router.get("/", ValidateJwt, starsController.getAll);
  router.get("/:id", ValidateJwt, starsController.getOne);
  router.post("/", ValidateJwt, starsController.create);
  router.put("/:id", ValidateJwt, starsController.update);
  router.delete("/:id", ValidateJwt, starsController.delete);
  return router;
}
