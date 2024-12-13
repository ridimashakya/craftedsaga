import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"

import { AuthRouter } from "./routes/auth.js" //authentication routes
import CartRouter from './routes/cart.js' //Cart Routes

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

//routes
app.use("/auth", AuthRouter);
app.use('/cart', CartRouter);


// MongoDB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); 
  });

// Start Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
