const express = require("express");
const router = express.Router();
const visionService = require("../services/visionService");

router.post("/detect", async (req, res) => {
  const { imageBase64, platform } = req.body;
  try {
    const labels = await visionService.detectLabels(imageBase64, platform);
    res.json({ labels });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
