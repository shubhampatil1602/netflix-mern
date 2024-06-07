import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
  path: '../.env',
});

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected.'))
    .catch((e) => console.log('Error connecting to db.', e));
};

export default dbConnection;
