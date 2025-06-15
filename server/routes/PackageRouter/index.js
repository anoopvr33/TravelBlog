import express from "express";
import Package from "../../db/schema/PackageSchema";

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const body = { ...req.body };
    await Package.create(body);
    res.status(201).json({ message: "Package Added Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error Occured", error: err });
  }
});

router.get("/get", async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ message: "Error Occured", error: err });
  }
});

export default router;
