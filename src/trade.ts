export const getCryptoPrice = async (page: any, symbol: string) => {
    await page.goto(`https://www.binance.com/en/trade/${symbol}_USDT`);
    const priceElement = await page.waitForSelector('.showPrice'); // Adjust selector
    const priceText = await priceElement.textContent();
    return parseFloat(priceText?.replace(',', '') || '0');
  };

  export const placeTrade = async (page: any, tradeType: 'buy' | 'sell') => {
    await page.fill('input[name="amount"]', process.env.TRADE_AMOUNT!);
    
    if (tradeType === 'buy') {
      await page.click('button:has-text("Buy")');
      console.log('✅ Buy order placed!');
    } else {
      await page.click('button:has-text("Sell")');
      console.log('✅ Sell order placed!');
    }
  };
  