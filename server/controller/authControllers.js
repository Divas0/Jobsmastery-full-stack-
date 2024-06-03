import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const saltRounds = 10;

// Register controller
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: { username },
    });

    if (userExists) {
      return res.status(400).send({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(200).send({ user, message: "User registered successfully" });
  } catch (error) {
    return res.status(400).send({ message: "User registration failed", error });
  }
};

// Login controller
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: { username },
    });

    if (!userExists) {
      return res.status(400).send({ message: "User not registered" });
    }

    const passwordMatched = await bcrypt.compare(password, userExists.password);
    if (!passwordMatched) {
      return res.status(400).send({ message: "Wrong password" });
    }

    const jwtToken = jwt.sign(
      {
        _id: userExists.id, // Assuming Prisma uses 'id' as the primary key
        email: userExists.email,
      },
      process.env.JWT_KEY
    );

    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 dy
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).send({ user: userExists, jwtToken });
  } catch (error) {
    return res.status(400).send({ message: "User login failed", error });
  }
};

// Logout controller
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).send({ message: "Logged out successfully!" });
  } catch (error) {
    return res.status(500).send({ message: "Error logging out!", error });
  }
};
