import express from "express";
import { uploadImage } from "../utils/cloudinaryConfig.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const savePosts = async (req, res) => {
  const { image, authorId, body, title, author } = req.body;
  try {
    // Upload the image and get the URL
    const uploadedImageUrl = await uploadImage(image).then((data)=> console.log(data));

    // Create a new post in the database
    const post = await prisma.post.create({
      data: {
        image: uploadedImageUrl,
        title: title,
        author: author,
        authorId: authorId,
        body: body,
      },
    });

    // Send a success response
    return res.status(200).send({ message: "Post saved successfully" });
  } catch (error) {
    // Log the error and send a failure response
    console.error("Error saving post:", error);
    return res
      .status(400)
      .send({ message: "Failed to save post", error: error.message });
  }
};
