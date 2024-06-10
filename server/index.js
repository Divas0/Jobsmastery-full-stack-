import express from "express";
import authRoute from "./routes/authRoute.js";
import "dotenv/config";

import postRouter from "./routes/postRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send(JSON.stringify(req.headers));
});

app.use("/api/user", authRoute);
app.use("/api/post", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
