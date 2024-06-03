import express from "express";
import { savePosts } from "../controller/postController.js";

const router = express.Router();

router.post("/saveposts", savePosts);

export default router;
