import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json()); // Corrected this line
import dotenv from 'dotenv';
import loginRoutes from './routes/login_routes.js';
import e from 'cors';

app.use(express.json());

dotenv.config();
app.use(cors());

app.use('/api', loginRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
