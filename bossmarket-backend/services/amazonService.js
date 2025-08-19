const axios = require("axios");

function getApiKey(platform) {
  if (platform === "ios") return process.env.AMAZON_API_KEY_IOS;
  if (platform === "android") return process.env.AMAZON_API_KEY_ANDROID;
  return process.env.AMAZON_API_KEY_WEB;
}

async function searchProducts(query, platform = "web") {
  const apiKey = getApiKey(platform);
  // NOT: Amazon'un resmi arama API'si için endpoint ve parametreler değişebilir!
  // Burada örnek endpoint gösterilmektedir.
  const res = await axios.get("https://api.amazon.com/search", {
    params: { q: query, api_key: apiKey },
  });
  return res.data;
}

module.exports = { searchProducts };
