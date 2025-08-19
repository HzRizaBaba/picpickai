const express = require("express");
const router = express.Router();
const chatgptService = require("../services/chatgptService");

router.post("/ask", async (req, res) => {
  const { prompt, platform } = req.body;
  try {
    const response = await chatgptService.askChatGPT(prompt, platform);
    res.json({ answer: response });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
