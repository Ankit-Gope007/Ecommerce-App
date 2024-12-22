import { Router } from "express";
import { 
    registerUser,
    getAllRegisteredUser,
    getByRole,
    loginUser,
    logoutUser
 } from "../controllers/User.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/registerUser').post(registerUser)
router.route('/getAllRegisteredUser').get(getAllRegisteredUser)
router.route('/getByRole').get(getByRole)
router.route('/loginUser').post(loginUser)
router.route('/logoutUser').post(verifyJWT,logoutUser)

export default router;