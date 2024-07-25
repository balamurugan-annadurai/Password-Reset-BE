import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/DbConfig.js";
import userRoutes from "./Routers/user.router.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
connectDB();


app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
})