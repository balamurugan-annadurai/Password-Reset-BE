import express from "express"
import { changePassword, forgotPassword, login,register, verifyString} from "../Controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/verifystring", verifyString);
router.post("/changepassword", changePassword);


export default router;