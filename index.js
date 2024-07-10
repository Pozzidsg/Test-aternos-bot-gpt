const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'ВашАдресСервера', // Адрес вашего сервера Aternos
  port: 25565, // Порт сервера, обычно 25565
  username: 'BotUsername', // Имя пользователя для вашего бота
  version: '1.21' // Версия Minecraft
});

bot.on('login', () => {
  console.log('Бот успешно вошел в игру');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Привет, ${username}! Вы сказали: ${message}`);
});

bot.on('end', () => {
  console.log('Соединение потеряно, пытаюсь подключиться снова...');
  setTimeout(() => {
    bot.connect();
  }, 30000); // Переподключение через 30 секунд
});

bot.on('error', (err) => {
  console.log(`Ошибка: ${err}`);
});

bot.on('kicked', (reason) => {
  console.log(`Кикнут с сервера: ${reason}`);
});
