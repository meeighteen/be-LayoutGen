import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./src/routes/userRoutes.js";
import { connectDB } from "./src/configs/database/mongodb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

//Routes
app.use("/users", userRoutes);

//MongoDB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar con la base de datos", err);
  });
