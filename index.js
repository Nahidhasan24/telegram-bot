require("dotenv").config();
const { Telegraf } = require("telegraf");
const { Groq } = require("groq-sdk");

// Validate token
const BOT_TOKEN = process.env.BOT_TOKEN;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
if (!BOT_TOKEN || !BOT_TOKEN.includes(":")) {
  console.error("❌ Invalid BOT_TOKEN in .env file");
  console.log("💡 Get your token from @BotFather and add it to .env");
  process.exit(1);
}

// Initialize bot
const bot = new Telegraf(BOT_TOKEN);

// ======================
// Bot Commands
// ======================

// Start command
bot.start((ctx) => {
  ctx.reply(
    "Welcome! I am your Telegram bot. Try these commands:\n\n" +
      "/echo [text] - Repeat your message\n" +
      "/time - Show current time\n" +
      "/info - Get chat info"
  );
});

// Echo command
bot.command("bot", async (ctx) => {
  const text = ctx.message.text.substring(6); // Remove "/echo "

  console.log(
    `🔊 Echo command received: "${text}" from ${
      ctx.from.username || ctx.from.id
    }`
  );

  if (!text) {
    return ctx.reply("Please provide text after /echo");
  }
  const result = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: text.trim(),
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
  ctx.reply(`Bot: ${result.choices[0]?.message?.content || ""}`);
});

// Time command
bot.command("time", (ctx) => {
  ctx.reply(`Current time: ${new Date().toLocaleTimeString()}`);
});

// Info command
bot.command("info", (ctx) => {
  const chat = ctx.chat;
  ctx.replyWithMarkdown(
    `*Chat Info:*\n` +
      `ID: \`${chat.id}\`\n` +
      `Type: ${chat.type}\n` +
      `Title: ${chat.title || "Private chat"}\n` +
      `User: ${chat.first_name || ""} ${chat.last_name || ""}`
  );
});

// Handle text messages
bot.on("text", (ctx) => {
  ctx.reply("I received your text message! Try /help for commands.");
});

// Error handling
bot.catch((err, ctx) => {
  console.error(`⚠️ Error for ${ctx.updateType}:`, err);
  ctx.reply("Oops! Something went wrong. Please try again later.");
});

// ======================
// Start the Bot
// ======================

// Launch with error handling
async function startBot() {
  try {
    console.log("🚀 Starting bot...");
    await bot.launch();
    console.log("🤖 Bot is now running!");

    // Graceful shutdown
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (err) {
    console.error("🔥 Failed to start bot:", err.message);

    if (err.response) {
      console.log("Telegram API response:", err.response);
    }

    console.log("\n💡 Troubleshooting:");
    console.log("1. Verify BOT_TOKEN in .env matches @BotFather");
    console.log("2. Check internet connection");
    console.log("3. Try regenerating token with /token in @BotFather");

    process.exit(1);
  }
}

startBot();
