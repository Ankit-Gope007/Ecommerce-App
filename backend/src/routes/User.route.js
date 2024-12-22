import { Router } from "express";
import { 
    registerUser,
    getAllRegisteredUser,
    getByRole,
    loginUser,
    logoutUser,
    updateProfile,
    updatePassword,
    getCurrentUser,
    getOrderDetails
 } from "../controllers/User.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/registerUser').post(registerUser)
router.route('/getAllRegisteredUser').get(getAllRegisteredUser)
router.route('/getByRole').get(getByRole)
router.route('/loginUser').post(loginUser)
router.route('/logoutUser').post(verifyJWT,logoutUser)
router.route('/updateProfile').patch(verifyJWT,updateProfile)
router.route('/updatePassword').patch(verifyJWT,updatePassword)
router.route('/getCurrentUser').get(verifyJWT,getCurrentUser)
router.route('/getOrderDetails').get(verifyJWT,getOrderDetails)


export default router;