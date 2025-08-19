const express = require("express");
const router = express.Router();
const amazonService = require("../services/amazonService");

router.get("/search", async (req, res) => {
  const { query, platform } = req.query;
  try {
    const results = await amazonService.searchProducts(query, platform);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
