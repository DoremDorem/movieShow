import "dotenv/config";
import express from "express";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express"
import {connectDb} from "./config/db.js"
import { serve } from "inngest/express";
import { functions, inngest } from "./inngest/index.js";
const app = express();
await connectDb();
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(express.json());
// Clerk authentication middleware
app.use(clerkMiddleware());


const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/inngest", serve({ client: inngest, functions }));


app.listen(port, "127.0.0.1",() => {
  console.log(`API running at http://localhost:${port}`);
});