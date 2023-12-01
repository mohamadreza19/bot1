const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6555410778:AAFrseXgj6HGWtvkv2qhmovPqIadaJAyMFE";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Define the keyboard layout
  const keyboard = [
    [
      { text: "Button 1", callback_data: "button1" },
      { text: "Button 2", callback_data: "button2" },
    ],
    [
      { text: "Button 3", callback_data: "button3" },
      { text: "Button 4", callback_data: "button4" },
    ],
  ];

  // Create the inline keyboard
  const replyMarkup = {
    inline_keyboard: keyboard,
  };

  // Send a message with the inline keyboard
  bot.sendMessage(chatId, "Choose an option:", { reply_markup: replyMarkup });
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
