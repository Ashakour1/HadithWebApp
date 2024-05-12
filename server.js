import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user-Routes.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;


app.use("/users",userRoutes)
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});
