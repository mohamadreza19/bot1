const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6555410778:AAFrseXgj6HGWtvkv2qhmovPqIadaJAyMFE";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  // Define the keyboard layout

  // Create the inline keyboard

  // Send a message with the inline keyboard
  bot.sendMessage(chatId, "لطفا از تب منو یک گزینه را انتخاب کنید");
});
bot.onText(/\/show_day/, (msg) => {
  const chatId = msg.chat.id;

  // Ask the user for their username
  bot.sendMessage(chatId, "لطفا یوزرنیم خود را وارد کنید");

  // Listen for the user's response
  bot.once("username", async (msg) => {
    try {
      const username = msg.username;

      // const res = await axios.get(
      //   "http://135.125.137.223:2020/api/170076536726XMN43GASWTRQ1/user/mrzar"
      // );
      console.log(res);
      bot.sendMessage(chatId, username);
    } catch (error) {
      console.log(error);
    }
  });
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  if (data === "/show_gb") {
    bot.sendMessage(chatId, `10Gb`);
  }
  if (data === "/show_day") {
    bot.sendMessage(chatId, `30`);
  }

  // Handle the button press
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
