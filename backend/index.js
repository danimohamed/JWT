import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import loginRoutes from "./routes/login_routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", loginRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
