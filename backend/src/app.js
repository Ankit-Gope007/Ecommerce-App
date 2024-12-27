import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();


app.use(cors({
  origin:'https://ecommerce-app-1zdy.vercel.app',
  credentials: true,  // If you're using cookies/sessions
}));


app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from './routes/User.route.js';
import productRouter from './routes/Product.route.js';
import reviewRouter from './routes/Review.route.js';
import orderRouter from './routes/Order.route.js';


// use routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/orders', orderRouter);


export { app };
