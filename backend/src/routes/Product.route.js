import { Router } from "express";
import {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getProductsBySeller,
    getProductsByPriceRange,
    getProductsByRating
} from "../controllers/Product.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";


const router = Router();


router.route('/addProduct').post(
    upload.fields([
        {
            name:'imageUrl',
            maxCount:4
        }
    ]),
    verifyJWT,
    addProduct)
router.route('/deleteProduct/:id').delete(deleteProduct)
router.route('/updateProduct/:id').patch(updateProduct)
router.route('/getAllProducts').get(getAllProducts)
router.route('/getProductById/:id').get(getProductById)
router.route('/getProductsByCategory/:category').get(getProductsByCategory)
router.route('/getProductsBySeller').get(verifyJWT,getProductsBySeller)
router.route('/getProductsByPriceRange').post(getProductsByPriceRange)
router.route('/getProductsByRating/:rating').get(getProductsByRating)





export default router;