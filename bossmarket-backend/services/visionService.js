const axios = require("axios");

function getApiKey(platform) {
  if (platform === "ios") return process.env.GOOGLE_VISION_API_KEY_IOS;
  if (platform === "android") return process.env.GOOGLE_VISION_API_KEY_ANDROID;
  return process.env.GOOGLE_VISION_API_KEY_WEB;
}

async function detectLabels(imageBase64, platform = "web") {
  const apiKey = getApiKey(platform);
  const res = await axios.post(
    `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
    {
      requests: [
        {
          image: { content: imageBase64 },
          features: [{ type: "LABEL_DETECTION", maxResults: 5 }],
        },
      ],
    },
  );
  return res.data.responses[0].labelAnnotations;
}

module.exports = { detectLabels };
