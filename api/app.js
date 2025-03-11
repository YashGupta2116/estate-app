import express from 'express';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoute);

app.listen(8000, () => {
  console.log('Server is running at PORT: 8000');
});
