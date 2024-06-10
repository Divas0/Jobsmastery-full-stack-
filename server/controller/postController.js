import express from "express";


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export const savePosts = async (req, res) => {
//   const {
//     authorId,
//     description,
//     content,
//     category,
//     title,
//     author,
//     publishedAt,
//   } = req.body;

//   try {
//     // Create a new post in the database
//     const post = await prisma.post.create({
//       data: {
//         title: title,
//         author: {
//           connect:{authorId:authorId}
//         },
//         description: description,
//         image: req.file ? req.file.buffer : null, // Store the image buffer or null
//         content: content,
//         category: category,
//         publishedAt: publishedAt,
//       },
//     });

//     // Send a success response
//     return res.status(200).send({ post, message: "post saved successfully" });
//   } catch (error) {
//     // Log the error and send a failure response
//     return res
//       .status(400)
//       .send({ message: "Failed to save post", error: error.message });
//   }
// };


export const savePosts = async (req, res) => {
  const {
    authorId,
    description,
    content,
    category,
    title,
    publishedAt,
  } = req.body;

  try {
    // Validate authorId
    if (!authorId) {
      return res.status(400).send({ message: "authorId is required" });
    }

    // Validate that authorId corresponds to an existing user
    // const existingUser = await prisma.user.findUnique({
    //   where: { id: authorId },
    // });

    // if (!existingUser) {
    //   return res.status(404).send({ message: "User not found" });
    // }

    // Create a new post in the database
    const post = await prisma.post.create({
      data: {
        title: title,
        author: {
          connect: { id: Number(authorId) } // Correct usage of connect
        },
        description: description,
        image: req.file ? req.file.buffer : null, // Store the image buffer or null
        content: content,
        category: category,
        publishedAt: new Date(publishedAt), // Ensure proper date format
      },
    });

    // Send a success response
    return res.status(200).send({ post, message: "Post saved successfully" });
  } catch (error) {
    // Log the error and send a failure response
    return res.status(400).send({ message: "Failed to save post", error: error.message });
  }
};


export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany({
      skip: 3,
    });

    return res
      .status(200)
      .send({ allPosts, message: "Post fetched successfully" });
  } catch (error) {
    console.error("Error fetching post:", error);
    return res
      .status(400)
      .send({ message: "Failed to fetch post", error: error.message });
  }
};

export const getPostById = async (req, res) => {
  const {id} = req.params;
  console.log(id)
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    return res
      .status(200)
      .send({post, message: "Post fetched successfully" });
  } catch (error) {
    console.error("Error fetching post:", error);
    return res
      .status(400)
      .send({ message: "Failed to fetch post", error: error.message });
  }
};
