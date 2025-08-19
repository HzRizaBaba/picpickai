require("dotenv").config();
const express = require("express");
const cors = require("cors");

const chatgptRouter = require("./routes/chatgpt");
const visionRouter = require("./routes/vision");
const amazonRouter = require("./routes/amazon");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chatgpt", chatgptRouter);
app.use("/api/vision", visionRouter);
app.use("/api/amazon", amazonRouter);

app.get("/", (req, res) => res.send("BossMarket API is working!"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
