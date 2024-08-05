import { Markup } from 'telegraf';
import ua from '../locales/ua.json' assert { type: 'json' };
import ru from '../locales/ru.json' assert { type: 'json' };
import en from '../locales/en.json' assert { type: 'json' };

const translations = {
  ua,
  ru,
  en,
};

export default function greet(ctx) {
  const language = ctx.state.language || 'ua';
  const translation = translations[language];

  const instagramUrl = 'https://www.instagram.com/vekmed?igsh=NTc4MTIwNjQ2YQ==';
  const siteUrl = `https://www.vekmed.com/${language !== 'ua' && language !== 'ru' && language !== 'en' ? '' : language}`;

  ctx.reply(translation.greeting, Markup.inlineKeyboard([
    [Markup.button.callback(translation.request, 'request')],
    [Markup.button.url('Instagram', instagramUrl)],
    [Markup.button.url(translation.site, siteUrl)],
    [Markup.button.callback(translation.application, 'application')]
  ]));
}

export function handleButtons(bot) {
  bot.action('request', async (ctx) => {
    await ctx.reply('You clicked on Request button.');
  });

  bot.action('application', async (ctx) => {
    await ctx.reply('1');
  });
}


// import { Markup } from "telegraf";
// import ua from "../locales/ua.json" assert { type: "json" };
// import ru from "../locales/ru.json" assert { type: "json" };
// import en from "../locales/en.json" assert { type: "json" };

// const translations = {
//   ua,
//   ru,
//   en,
// };

// export default function greet(ctx) {
//   const language = ctx.state.language || "ua";
//   const translation = translations[language];

//   ctx.reply(
//     translation.greeting,
//     Markup.keyboard([
//       [
//         translation.request,
//         "Instagram",
//         translation.site,
//         translation.application,
//       ],
//     ]).resize()
//   );
// }

// import { Markup } from "telegraf";
// import ua from "../locales/ua.json" assert { type: "json" };
// import ru from "../locales/ru.json" assert { type: "json" };
// import en from "../locales/en.json" assert { type: "json" };

// const translations = {
//   ua,
//   ru,
//   en,
// };

// export default function greet(ctx) {
//   const language = ctx.state.language || "ua";
//   const translation = translations[language];

//   const instagramUrl = "https://www.instagram.com/vekmed?igsh=NTc4MTIwNjQ2YQ==";
//   const siteUrl = `https://www.vekmed.com/${language !== "ua" && language !== "ru" && language !== "en" ? "" : language}`;

//   ctx.reply(
//     translation.greeting,
//     Markup.keyboard([
//       [Markup.button.text(translation.request)],
//       [Markup.button.text("Instagram")],
//       [Markup.button.text(translation.site)],
//       [Markup.button.text(translation.application)],
//     ])
//       .resize()
//       .oneTime()
//   );
// }

// // import ua from "../locales/ua.json" assert { type: "json" };
// // import ru from "../locales/ru.json" assert { type: "json" };
// // import en from "../locales/en.json" assert { type: "json" };

// // const translations = {
// //   ua,
// //   ru,
// //   en,
// // };

// // export default function greet(ctx) {
// //   const language = ctx.state.language || "ua";
// //   const translation = translations[language];
// //   ctx.reply(translation.greeting);
// // }
