import { Markup } from "telegraf";
import { updateUserLanguage } from "./userHandlers.js";

const setLanguage = async (ctx) => {
  await ctx.reply(
    "Choose your language:",
    Markup.inlineKeyboard([
      Markup.button.callback("UA", "set_lang_ua"),
      Markup.button.callback("EN", "set_lang_en"),
      Markup.button.callback("RU", "set_lang_ru"),
    ])
  );
};

const handleLanguageChange = (lang) => async (ctx) => {
  const userId = ctx.from.id.toString();
  await updateUserLanguage(userId, lang);
  ctx.state.language = lang;
  const messages = {
    ua: "Обрана Українська мова",
    en: "Language set to English",
    ru: "Выбран русский язык",
  };
  await ctx.reply(messages[lang]);
};

export { setLanguage, handleLanguageChange };
