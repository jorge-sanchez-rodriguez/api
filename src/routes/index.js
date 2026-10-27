import express from "express";
const router = express.Router();

import usersRoutes from "./users.routes.js";
router.use("/users", usersRoutes);

console.log("Router initialized");


export default router;
