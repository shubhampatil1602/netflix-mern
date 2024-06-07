import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './utils/db.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';

dotenv.config({
  path: '.env',
});

const app = express();

// DB Connection
dbConnection();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOption));

// APIs
app.use('/api/v1/user', userRoute);

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!', success: true });
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port http://localhost:${process.env.PORT}`)
);
