import { Router } from "express";
import { registerUser, logoutUser } from "../Controllers/user.controllers.js";
import { upload } from "../Middlewares/multer.middleware.js";
import { verifyJWT } from "../Middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser,
);

//secured Routes 
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
