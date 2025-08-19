const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/search", async (req, res) => {
  const { query } = req.query;
  // eBay API için demo endpoint
  try {
    const ebayRes = await axios.get(
      "https://api.ebay.com/buy/browse/v1/item_summary/search",
      {
        params: { q: query },
        headers: { Authorization: `Bearer ${process.env.EBAY_API_TOKEN}` },
      },
    );
    res.json(ebayRes.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
