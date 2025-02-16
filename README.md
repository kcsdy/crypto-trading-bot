# 🚀 **Crypto Trading Bot (Automated Trading with Playwright & TypeScript)**  

## 📌 **Overview**  
This project is an **automated cryptocurrency trading bot** built with **TypeScript and Playwright**. It logs into a crypto exchange (like **Binance**), fetches real-time prices, and executes **buy/sell orders** based on pre-defined trading strategies. The bot also includes **risk management features (stop-loss & take-profit)** and **Telegram notifications** for trade updates.  

---

## 🎯 **Key Features**  
✅ **Automated Login & 2FA Handling** – Securely logs into the exchange.  
✅ **Real-time Price Monitoring** – Scrapes live prices of crypto assets.  
✅ **Automated Buy/Sell Orders** – Places market/limit orders based on price conditions.  
✅ **Stop-Loss & Take-Profit Mechanism** – Minimizes risk by automatically selling at certain thresholds.  
✅ **Telegram Alerts** – Sends real-time trade notifications.  
✅ **Paper Trading Mode** – Simulates trades without real money for testing.  

---

## 💡 **How It Works**  

1️⃣ **Login Automation**: The bot logs into the exchange using Playwright.  
2️⃣ **Price Fetching**: It retrieves live market prices.  
3️⃣ **Trading Logic**: Based on set conditions, the bot executes buy/sell trades.  
4️⃣ **Risk Management**: If prices drop/rise beyond set limits, the bot triggers stop-loss/take-profit.  
5️⃣ **Alerts**: Every trade action is sent as a **Telegram message**.  

---

## 🔧 **Tech Stack**  

| Technology  | Purpose  |
|------------|---------|
| **TypeScript** | Core programming language |
| **Playwright** | Web automation (login, trading) |
| **Node.js** | JavaScript runtime |
| **Axios** | HTTP requests (Telegram API) |
| **dotenv** | Securely manage environment variables |
| **Winston** | Logging system |
| **Telegram Bot API** | Sends trade alerts |

---

## 🚀 **Getting Started (Installation & Setup)**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/crypto-trading-bot.git
cd crypto-trading-bot
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a **`.env`** file and add your credentials (replace values):  
```
BINANCE_EMAIL=your_email@example.com
BINANCE_PASSWORD=your_password
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_chat_id
TRADE_AMOUNT=0.01
STOP_LOSS=50000
TAKE_PROFIT=52000
```
🔹 **Important**: **Never share your `.env` file!** It contains sensitive information.  

### **4️⃣ Run the Bot**  
Start the bot:  
```sh
npx ts-node src/bot.ts
```

---

## 📜 **How to Use the Bot?**  

1️⃣ **Modify Trading Rules** in `bot.ts`  
2️⃣ **Test in Paper Mode** before live trading  
3️⃣ **Run the Bot & Monitor Telegram Alerts**  

---

## 🛠️ **Customization**  

Want to **change trading strategies**? Modify the logic in `bot.ts`:  

```typescript
if (price <= STOP_LOSS) {
  await placeTrade(page, 'sell');
  await sendTelegramAlert(`🚨 Stop-loss triggered! Sold at $${price}`);
} 
```
You can add more conditions for **custom strategies**!  

---

## 🚨 **Security Considerations**  

🔒 **Use Environment Variables** (`.env`) to protect sensitive data.  
🔒 **Enable 2FA** on your exchange account.  
🔒 **Use Paper Trading Mode First** before real trading.  

---

## 📢 **Future Improvements**  

✅ **AI-Based Trading** – Use Machine Learning for smarter trades.  
✅ **Multi-Exchange Support** – Expand to **Coinbase, Kraken, KuCoin**.  
✅ **Mobile App Integration** – Monitor trades via a mobile app.  

---

## 🤝 **Contributing**  
Want to improve the bot? Feel free to **fork the repo**, add features, and create a pull request!  

---

## 📞 **Contact & Support**  
💬 Need help? Reach out via:  
📩 **Email**: chakrabortykuntal27@gmail.com  
🐦 **Twitter**: @kcsdy 
📘 **GitHub Issues**: Open a ticket for bug reports & feature requests.  

---

🎉 **Thanks for checking out my project!** Give it a ⭐ on [GitHub](https://github.com/your-username/crypto-trading-bot) if you like it! 🚀🔥  
