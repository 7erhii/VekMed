import { Markup } from "telegraf";
import ua from "../locales/ua.json" assert { type: "json" };
import ru from "../locales/ru.json" assert { type: "json" };

function getWelcomeMessage(language) {
  if (language === "ru") {
    return ru.welcome;
  }
  return ua.welcome;
}

export function sendWelcomeMessage(ctx) {
  const language = ctx.from.language_code.startsWith("ru") ? "ru" : "ua";
  const message = getWelcomeMessage(language);

  return ctx.reply(
    message,
    Markup.keyboard([["/start"]])
      .resize()
      .oneTime()
  );
}
