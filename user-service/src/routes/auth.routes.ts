import { Router } from "express";
import {
  signup,
  login,
  updateProfile,
} from "../controllers/auth.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/profile", authenticateJWT, updateProfile);

export default router;
