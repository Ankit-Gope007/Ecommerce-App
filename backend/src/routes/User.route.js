import { Router } from "express";
import { 
    registerUser,
    getAllRegisteredUser
 } from "../controllers/User.controller.js";

const router = Router();

router.route('/registerUser').post(registerUser)
router.route('/getAllRegisteredUser').get(getAllRegisteredUser)

export default router;