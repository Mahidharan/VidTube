import express from "express";
import cors from "cors";
import healthCheckRouter from "./Routes/healthcheck.routes.js";
import userRoutes from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(cookieParser());

//Routes
app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/register", userRoutes);

export default app;
