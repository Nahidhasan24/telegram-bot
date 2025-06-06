# AI-Powered Telegram Bot 🤖💬

<div align="center">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" alt="Telegram">
  <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Groq-AI-blueviolet" alt="Groq AI">
</div>

A smart Telegram bot integrated with Groq's Llama 3 AI for natural conversations. Built with Telegraf.js.

## ✨ Features

- **AI Chat Integration** - Powered by Groq's Llama 3-70b model
- **Bot Commands** - Time, info, and AI responses
- **Error Handling** - Robust error recovery system
- **User Context** - Personalized responses
- **Logging** - Detailed command logging

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- Telegram account
- API keys:
  - Telegram bot token from [@BotFather](https://t.me/BotFather)
  - Groq API key from [Groq Cloud](https://console.groq.com/)

### Installation

```bash
git clone https://github.com/Nahidhasan24/telegram-bot.git
cd ai-telegram-bot
npm install
```

### Configuration

Create `.env` file:

```env
BOT_TOKEN=your_telegram_bot_token
GROQ_API_KEY=your_groq_api_key
```

### Running the Bot

```bash
npm run dev
```

## 📋 Command Reference

| Command  | Description          | Example                        |
| -------- | -------------------- | ------------------------------ |
| `/start` | Show welcome message | `/start`                       |
| `/bot`   | Get AI response      | `/bot Explain quantum physics` |
| `/time`  | Show current time    | `/time`                        |
| `/info`  | Get chat information | `/info`                        |

## 🧠 AI Integration

The bot uses Groq's ultra-fast Llama 3-70b model:

```javascript
const result = await groq.chat.completions.create({
  messages: [{ role: "user", content: message }],
  model: "llama-3.3-70b-versatile",
});
```

## 🛠️ Project Structure

```
ai-telegram-bot/
├── .env               # Environment variables
├── bot.js             # Main bot logic
├── package.json       # Dependencies
└── README.md          # This file
```

## 🐛 Troubleshooting

### Common Issues

1. **Missing API Keys**

   - Verify both `.env` keys are set
   - Check for typos in variable names

2. **Groq API Errors**

   - Ensure your Groq account has credits
   - Check rate limits

3. **Bot Not Responding**
   - Verify bot is running (`npm start`)
   - Check logs for errors

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">
  <p>Enjoy your AI companion! 🤖💡</p>
  <img width="200" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZkOW5iY3VqY2J3NnR4dGJ5Z2J6eW5qY2NtNnBqZzZ1ZzB1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abAHdYvZdBNnGZq/giphy.gif" alt="AI Bot">
</div>
```

### Key Improvements:

1. **Clearer Structure** - Better organized sections
2. **Visual Enhancements** - Added badges and emojis
3. **Complete Setup Guide** - Includes both Telegram and Groq setup
4. **Command Examples** - Added usage examples
5. **Technical Details** - Shows the AI integration code
6. **Troubleshooting** - More detailed solutions
7. **Visual Elements** - Added GIF at bottom for fun
