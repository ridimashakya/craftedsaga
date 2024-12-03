import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"

import { AuthRouter } from "./routes/auth.js"


const port = process.env.PORT || 5000;

const app = express()


app.use(express.json())
app.use(cors())

//routes
app.use("/auth", AuthRouter)

mongoose.connect(process.env.DB_URL);

app.listen(port, () => console.log("server started"));