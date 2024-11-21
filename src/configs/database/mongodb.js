import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/layout_gen";

    await mongoose.connect(MongoURI, {});
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
