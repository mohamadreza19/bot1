const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const moment = require("jalali-moment");

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
bot.onText(/\/show_balance/, (msg) => {
  const chatId = msg.chat.id;

  // Ask the user for their username
  bot.sendMessage(chatId, "لطفا نام یوزر را وارد کنید:");

  // Listen for the user's response using bot.once
  bot.once("text", async (msg) => {
    const username = msg.text;
    const { data } = await axios.get(
      `http://135.125.137.223:2020/api/170076536726XMN43GASWTRQ1/user/${username}`
    );
    // Save the username to the userData dictionary (you can replace this with your actual data retrieval logic)

    if (!data.length) {
      const responseData = `یوزری با این مشخصات پیدا نشد`;
      bot.sendMessage(chatId, responseData);
    } else {
      let end_date = Date.now();
      const realData = data[0];

      const start_date = moment(realData.start_date);
      if (realData.end_date) {
        end_date = moment(realData.end_date);
      } else {
        end_date = 0;
      }
      const dif = end_date.diff(start_date, "days");
      const alltrafficAccess = realData.traffic;
      const total_use = `${realData.traffics[0].total}مگ`;

      const end_dateRes = end_date
        ? moment(end_date).locale("fa").format("y/M/D")
        : "ندارد";
      const alltrafficAccess_format = alltrafficAccess
        ? alltrafficAccess
        : "نامحدود";
      const responseData = `
      تاریخ فعالسازی :${moment(start_date).locale("fa").format("y/M/D")}
      تاریخ انقضا :${end_dateRes}
      تعداد روز مانده :${dif}
      ترافیک قابل دسترس :${alltrafficAccess_format}
      ترافیک  استفاده شده :${total_use}
      `;
      bot.sendMessage(chatId, responseData);
    }

    // You can also use userData[chatId] to access the user's data later in the conversation
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
