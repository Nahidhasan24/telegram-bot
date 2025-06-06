# Telegram Interactive Bot 🤖

<div align="center">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" alt="Telegram">
  <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Telegraf-4.0-blue" alt="Telegraf">
</div>

A feature-rich Telegram bot with interactive keyboards and buttons built with Node.js and Telegraf.

## ✨ Features

- **Reply Keyboards** - Persistent menu buttons
- **Inline Buttons** - Interactive buttons under messages
- **Dynamic Menus** - Generate buttons programmatically
- **WebApp Integration** - Open web applications directly
- **Error Handling** - Robust error recovery system

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- Telegram account
- Bot token from [@BotFather](https://t.me/BotFather)

### Installation

```bash
# Clone repository
git clone https://github.com/Nahidhasan24/telegram-bot.git
cd telegram-bot

# Install dependencies
npm install

# Configure environment
cp .env.example .env
nano .env  # Add your bot token
```

### Running the Bot

```bash
npm start
```

## 📋 Command Reference

| Command    | Description                   |
| ---------- | ----------------------------- |
| `/start`   | Initial welcome message       |
| `/menu`    | Show main keyboard            |
| `/pizza`   | Pizza size selection (inline) |
| `/support` | Contact support options       |
| `/hide`    | Remove keyboard               |

## 🛠️ Customization

### Button Types Example

```javascript
// Inline buttons
Markup.inlineKeyboard([
  Markup.button.callback("Option 1", "opt1"),
  Markup.button.url("Visit Site", "https://example.com"),
]);

// Keyboard buttons
Markup.keyboard([
  ["🍎 Apple", "🍌 Banana"],
  ["🐶 Dogs", "🐱 Cats"],
]).resize();
```

## 🌐 Webhook Setup (Optional)

For production deployment:

```javascript
// Enable webhooks
bot.telegram.setWebhook("https://yourdomain.com/webhook");
bot.startWebhook("/webhook");
```

## 🐛 Troubleshooting

### Common Issues

1. **404 Not Found Error**

   - Verify token matches @BotFather's exactly
   - Check for hidden characters in `.env`

2. **Buttons Not Appearing**
   - Ensure you're using `reply_markup` correctly
   - Test in private chats (some buttons don't work in groups)

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">
  <p>Happy coding! 🎉</p>
  <img src="https://img.shields.io/badge/Test%20Bot-t.me/YourBot-blue" alt="Test Bot">
</div>
```

### Key Markdown Features Used:

1. **Headers** (`#`, `##`, `###`)
2. **Code Blocks** (` ` ```)
3. **Tables** (for command reference)
4. **Badges** (shields.io)
5. **Lists** (both ordered and unordered)
6. **Alignment** (center div for badges)
7. **Inline Code** (`` ` ``)
8. **Links** (`[text](url)`)

This format is:

- GitHub/GitLab compatible
- Visually appealing
- Mobile-responsive
- Contains all essential project information
- Uses proper Markdown syntax throughout
