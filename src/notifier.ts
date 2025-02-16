import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const sendTelegramAlert = async (message: string) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  await axios.post(url, {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text: message,
  });
};
