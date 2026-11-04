const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server started successfully");
  });
};

startServer();