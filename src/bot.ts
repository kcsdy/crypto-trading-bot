import { loginToExchange } from './login';
import { getCryptoPrice } from './trade';
import { sendTelegramAlert } from './notifier';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  const { browser, page } = await loginToExchange();

  const symbol = 'BTC';
  const stopLoss = parseFloat(process.env.STOP_LOSS!);
  const takeProfit = parseFloat(process.env.TAKE_PROFIT!);

  while (true) {
    const price = await getCryptoPrice(page, symbol);
    console.log(`💰 Current BTC Price: $${price}`);

    if (price <= stopLoss) {
      console.log('⚠️ Stop-loss triggered!');
      //sell here
      await sendTelegramAlert(`🚨 BTC dropped below $${stopLoss}! Sold at $${price}`);
      break;
    }

    if (price >= takeProfit) {
      console.log('🎉 Take-profit reached!');
      //sell here
      await sendTelegramAlert(`💰 BTC hit $${takeProfit}! Profit secured.`);
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 30000)); // Check every 30 sec
  }

  await browser.close();
})();