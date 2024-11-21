import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user/userController.js";
import { validateLoginFields } from "../middleware/validateFields.js";

const router = Router();

router.post("/register", validateLoginFields, registerUser);

router.post("/login", validateLoginFields, loginUser);

export { router as userRoutes };
