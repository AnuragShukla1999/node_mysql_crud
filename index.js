import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import budgetRouter from './routes/budgetRoute.js';
import acutalRouter from './routes/actualRoute.js';
import userRouter from './routes/userRoute.js';

import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// });

app.use(bodyParser.json());


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.use('/api', budgetRouter)
app.use('/api', acutalRouter)
app.use('/api', userRouter)



app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});