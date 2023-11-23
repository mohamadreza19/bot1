const express = require("express");
const token = "6555410778:AAFrseXgj6HGWtvkv2qhmovPqIadaJAyMFE";
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(token, {
  polling: {
    interval: 700,
    autoStart: true,
  },
});
const app = express();
const port = 3000;

const admin = require("./routes/admin");

bot.onText("/start", (msg) => {
  console.log("hi");
});

// app.use("/", admin);
// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
