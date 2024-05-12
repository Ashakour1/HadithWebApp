import asyncHandler from "express-async-handler";
import prisma from "../config/db.js";

// @desc    Fetch all users
// @route   GET /users
// @access  Public

export const getUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();

});


