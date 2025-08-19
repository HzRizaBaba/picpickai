const axios = require("axios");

function getApiKey(platform) {
  if (platform === "ios") return process.env.OPENAI_API_KEY_IOS;
  if (platform === "android") return process.env.OPENAI_API_KEY_ANDROID;
  return process.env.OPENAI_API_KEY_WEB;
}

async function askChatGPT(prompt, platform = "web") {
  const apiKey = getApiKey(platform);
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );
  return res.data.choices[0].message.content;
}

module.exports = { askChatGPT };
