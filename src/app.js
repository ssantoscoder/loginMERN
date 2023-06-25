import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/tasks.routes.js"
import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api', taskRoutes);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("client/dist"));
  
    app.get("*", (req, res) => {
      console.log(path.resolve("client", "dist", "index.html") );
      res.sendFile(path.resolve("client", "dist", "index.html"));
    });
  }

export default app;