import express from "express";
import Destination from "../../db/schema/DestinationSchema";

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const body = { ...req.body };
    await Destination.create(body);
    res.status(201).json({ message: "Destination Added Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error Occured", error: err });
  }
});

router.get("/get", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ message: "Error Occured", error: err });
  }
});

export default router;
