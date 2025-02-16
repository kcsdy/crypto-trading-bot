export const getCryptoPrice = async (page: any, symbol: string) => {
    await page.goto(`https://www.binance.com/en/trade/${symbol}_USDT`);
    const priceElement = await page.waitForSelector('.showPrice'); // Adjust selector
    const priceText = await priceElement.textContent();
    return parseFloat(priceText?.replace(',', '') || '0');
  };