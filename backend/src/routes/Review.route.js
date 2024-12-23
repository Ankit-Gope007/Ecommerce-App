import Router from 'express';
import {
    addReview,
    removeReview,
    getReviews,
    updateReview
} from '../controllers/Review.controller.js';
import {verifyJWT } from '../middlewares/auth.middleware.js';


const router = Router();

router.route('/addReview/:product').post(verifyJWT,addReview);
router.route('/removeReview/:product').delete(verifyJWT,removeReview);
router.route('/updateReview/:product').patch(verifyJWT,updateReview);
router.route('/getReviews/:product').get(getReviews);





export default router;