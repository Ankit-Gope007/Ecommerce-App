import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors({
    origin: 'https://ecommerce-app-frontend-9xi0.onrender.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['set-cookie']
}));

app.use((req, res, next) => {
  console.log('Cookies received:', req.cookies);
  console.log('Headers:', req.headers);
  next();
});



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
