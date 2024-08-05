import 'dotenv/config';
import { Telegraf } from 'telegraf';
import greet, { handleButtons } from './components/greet.js';
import { checkOrUpdateUser, updateUserLanguage } from './components/userHandlers.js';
import { userPhoto } from './components/userPhoto.js';
import { setLanguage, handleLanguageChange } from './components/setLanguage.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const user = await checkOrUpdateUser(ctx);
  const userId = ctx.from.id.toString();

  let userLanguage = user.userLanguage;

  if (!userLanguage || !['ru', 'ua', 'en'].includes(userLanguage)) {
    userLanguage = ['ru', 'ua', 'en'].includes(ctx.from.language_code) ? ctx.from.language_code : 'ua';
    updateUserLanguage(userId, userLanguage);
  }

  ctx.state.language = userLanguage;

  await greet(ctx);
  await userPhoto(ctx);
});

bot.command('lang', async (ctx) => {
  await setLanguage(ctx);
});

bot.action('set_lang_ua', handleLanguageChange('ua'));
bot.action('set_lang_en', handleLanguageChange('en'));
bot.action('set_lang_ru', handleLanguageChange('ru'));

handleButtons(bot);

bot.telegram.setMyCommands([
  { command: '/start', description: 'Start the bot' },
  { command: '/lang', description: 'Change language' }
]);

bot.launch();
console.log('Bot started');
