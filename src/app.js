// abb hum yaha par ek apna express kon handle karenge
import express from "express";
// abb yaha par hum cors and cookie-parser kon import karenge
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// abb yaha par cors kon call back function se use karenge
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// abb hum yaha par ek configuration bana rahe hai
app.use(express.json({ limit: "16kb" }));

export { app };
