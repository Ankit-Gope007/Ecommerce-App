import { Router } from "express";
import { addToCart , getOrders ,deleteOrder} from "../controllers/Order.controller.js";
import  {verifyJWT} from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/addToCart/:productID").post(verifyJWT, addToCart); 
router.route("/getOrders").get(verifyJWT, getOrders);
router.route("/deleteOrder").delete(verifyJWT, deleteOrder);


export default router;