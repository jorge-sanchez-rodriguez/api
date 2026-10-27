import express from "express";
const router = express.Router();

import usersRoutes from "./users.routes.js";
router.use("/users", usersRoutes);


export default router;
