import express from "express";
import DestinationRouter from "./DesitinationRouter/index.js";
import PackageRouter from "./PackageRouter/index.js";

const router = express.Router();

router.use("/api/destination", DestinationRouter);
router.use("/api/packages", PackageRouter);

export default router;
