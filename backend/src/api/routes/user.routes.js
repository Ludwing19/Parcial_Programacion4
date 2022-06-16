import { Router } from "express"; 
import { checkSchema } from "express-validator";
import { UserController } from "../controllers/user";
import { ValidateJwt } from "../middlewares/ValidateJWT";

export function UserRouter() {
  const userController = new UserController();
  const router = Router();
  router.get("/", ValidateJwt, userController.getAll);
  router.get("/:id", ValidateJwt, userController.getOne);
  router.put("/:id", ValidateJwt, userController.update);
  router.delete("/:id", ValidateJwt, userController.delete);
  router.post("/auth/signin", userController.signin);
  router.post("/auth/signup", userController.signup);
  return router;
}
