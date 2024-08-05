const { Telegraf, Markup, Scenes, session } = require("telegraf");
const LocalSession = require("telegraf-session-local");
require("dotenv").config();
const fs = require("fs");
const path = "./users.json";

const bot = new Telegraf(process.env.BOT_TOKEN);

const localSession = new LocalSession({ database: 'session_db.json' });
bot.use(localSession.middleware());



function loadUserData() {
  try {
    return JSON.parse(fs.readFileSync(path, "utf8"));
  } catch (err) {
    console.error("Failed to read user data from file:", err);
    return {};
  }
}
function saveUserData(data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to save user data to file:", err);
  }
}

const userData = loadUserData();

function checkOrUpdateUser(ctx) {
  const userId = ctx.from.id.toString();
  const now = new Date();
  if (!userData[userId]) {
    userData[userId] = {
      userLanguage: "",
      userName: [ctx.from.first_name],
      userDescription: [ctx.from.username || "No description"],
      entryDate: [now.toISOString()],
      userPhone: [ctx.from.phone_number || "No phone number"],
    };
  } else {
    const user = userData[userId];
    if (!user.userName.includes(ctx.from.first_name)) {
      user.userName.push(ctx.from.first_name);
    }
    if (ctx.from.username && !user.userDescription.includes(ctx.from.username)) {
      user.userDescription.push(ctx.from.username);
    }
    if (ctx.from.phone_number && !user.userPhone.includes(ctx.from.phone_number)) {
      user.userPhone.push(ctx.from.phone_number);
    }
    const lastEntry = new Date(user.entryDate[user.entryDate.length - 1]);
    const hoursDiff = Math.abs(now - lastEntry) / 36e5;
    if (hoursDiff > 24) {
      user.entryDate.push(now.toISOString());
    }
  }
  saveUserData(userData);
}

bot.start((ctx) => {
  checkOrUpdateUser(ctx);
  ctx.reply(
    "Оберіть мову / Choose your language:",
    Markup.inlineKeyboard(
      [
        Markup.button.callback("Українська", "UA"),
        Markup.button.callback("Русский", "RU"),
        Markup.button.callback("English", "ENG"),
      ],
      { resize: true },
    ).oneTime(),
  );
});

bot.action(["UA", "RU", "ENG"], async (ctx) => {
  const userId = ctx.from.id.toString();
  const language = ctx.match[0];
  userData[userId].userLanguage = language;
  saveUserData(userData);

  const emojis = {
    form: "📝",
    direct: "✉️",
    group: "👥",
    instagram: "📸",
    website: "🌐"
  };

  const descriptions = {
    UA: {
      form: `<b>${emojis.form} Залишити заявку</b>\nЯкщо ви маєте специфічні запити або побажання, будь ласка, заповніть нашу форму заявки та ми з вами зв'яжемося!\n`,
      direct: `<b>${emojis.direct} Написати нам напряму</b>\nНе зволікайте звернутися до нас напряму через Telegram для швидкої відповіді!\n`,
      group: `<b>${emojis.group} Наша Telegram група</b>\nПриєднуйтесь до нашої групи, щоб залишатись у курсі останніх новин і акцій!\n`,
      instagram: `<b>${emojis.instagram} Instagram</b>\nВідвідайте наш профіль в Instagram, щоб побачити наші останні проекти та новини!\n`,
      website: `<b>${emojis.website} Наш веб-сайт</b>\nВідвідайте наш сайт, щоб дізнатись більше інформації та дізнатись про актуальні пропозиції!\n`
    },
    RU: {
      form: `<b>${emojis.form} Оставить заявку</b>\nЕсли у вас есть специфические запросы или пожелания, пожалуйста, заполните нашу форму, и мы свяжемся с вами!\n`,
      direct: `<b>${emojis.direct} Написать нам напрямую</b>\nНе стесняйтесь обращаться к нам напрямую через Telegram для быстрой связи!\n`,
      group: `<b>${emojis.group} Наша Telegram группа</b>\nПрисоединяйтесь к нашей группе, чтобы быть в курсе последних новостей и акций!\n`,
      instagram: `<b>${emojis.instagram} Instagram</b>\nПосетите наш профиль в Instagram, чтобы увидеть наши последние проекты и новости!\n`,
      website: `<b>${emojis.website} Наш веб-сайт</b>\nПосетите наш сайт, чтобы узнать больше информации и узнать о текущих предложениях!\n`
    },
    ENG: {
      form: `<b>${emojis.form} Leave a request</b>\nIf you have specific requests or wishes, please fill out our request form and we will contact you!\n`,
      direct: `<b>${emojis.direct} Write to us directly</b>\nDo not hesitate to contact us directly via Telegram for a quick response!\n`,
      group: `<b>${emojis.group} Our Telegram group</b>\nJoin our group to stay updated with the latest news and promotions!\n`,
      instagram: `<b>${emojis.instagram} Instagram</b>\nVisit our Instagram profile to see our latest projects and news!\n`,
      website: `<b>${emojis.website} Our website</b>\nVisit our site to learn more and find out about current offers!\n`
    }
  };

  const chosenTexts = descriptions[language];

  await ctx.replyWithHTML(`⬇️ <b>Choose an option:</b>\n\n\n${chosenTexts.form}\n${chosenTexts.direct}\n${chosenTexts.group}\n${chosenTexts.instagram}\n${chosenTexts.website}`, Markup.inlineKeyboard([
    Markup.button.callback(`${emojis.form} Fill Form`, "FILL_FORM"),
    Markup.button.url(`${emojis.direct} Direct Contact`, "https://t.me/VekMedCare"),
    Markup.button.url(`${emojis.group} VekMed Channel`, "https://t.me/vekmed_ua"),
    Markup.button.url(`${emojis.instagram} Instagram`, "https://www.instagram.com/vekmed"),
    Markup.button.url(`${emojis.website} VekMed.com`, `https://www.vekmed.com/${language === "ENG" ? "en" : language.toLowerCase()}`)
  ], { columns: 1 }).resize());
});





const formScene = new Scenes.BaseScene('formScene');

formScene.enter((ctx) => {
  // Сброс предыдущих значений сессии при каждом входе в сцену
  ctx.session.name = undefined;
  ctx.session.message = undefined;
  ctx.session.contact = undefined;

  // Загрузка языка пользователя или установка по умолчанию
  const userId = ctx.from.id.toString();
  const userLanguage = userData[userId] && userData[userId].userLanguage ? userData[userId].userLanguage : 'UA';

  const promptTexts = {
    UA: "Введіть ваше ім'я:",
    RU: "Введите ваше имя:",
    ENG: "Enter your name:"
  };

  // Отправка текста с учётом языка пользователя
  ctx.replyWithHTML(promptTexts[userLanguage]);
});

formScene.on('text', (ctx) => {
  const userId = ctx.from.id.toString();
  const userLanguage = userData[userId] && userData[userId].userLanguage ? userData[userId].userLanguage : 'UA';

  if (!ctx.session.name) {
    ctx.session.name = ctx.message.text;
    const messageTexts = {
      UA: "Введіть ваше звернення:",
      RU: "Введите ваше обращение:",
      ENG: "Enter your request:"
    };
    return ctx.replyWithHTML(messageTexts[userLanguage]);
  }

  if (!ctx.session.message) {
    ctx.session.message = ctx.message.text;
    const contactTexts = {
      UA: "Введіть ваш контакт для зв'язку:",
      RU: "Введите ваш контакт для связи:",
      ENG: "Enter your contact information:"
    };
    return ctx.replyWithHTML(contactTexts[userLanguage]);
  }

  if (!ctx.session.contact) {
    ctx.session.contact = ctx.message.text;
    const dataConfirmationTexts = {
      UA: `Ім'я: ${ctx.session.name}\nЗвернення: ${ctx.session.message}\nКонтакт: ${ctx.session.contact}\n\nВідправити дані?`,
      RU: `Имя: ${ctx.session.name}\nОбращение: ${ctx.session.message}\nКонтакт: ${ctx.session.contact}\n\nОтправить данные?`,
      ENG: `Name: ${ctx.session.name}\nRequest: ${ctx.session.message}\nContact: ${ctx.session.contact}\n\nSubmit the information?`
    };
    ctx.replyWithHTML(dataConfirmationTexts[userLanguage], Markup.inlineKeyboard([
      Markup.button.callback(userLanguage === 'UA' ? "Так, відправити" : userLanguage === 'RU' ? "Да, отправить" : "Yes, submit", "submit"),
      Markup.button.callback(userLanguage === 'UA' ? "Скасувати" : userLanguage === 'RU' ? "Отмена" : "Cancel", "cancel")
    ]));
  }
});

formScene.action('submit', (ctx) => {
  const userId = ctx.from.id.toString();
  const userLanguage = userData[userId] && userData[userId].userLanguage ? userData[userId].userLanguage : 'UA';
  const data = `Новая заявка:\nИмя: ${ctx.session.name}\nОбращение: ${ctx.session.message}\nКонтакт: ${ctx.session.contact}`;
  ctx.telegram.sendMessage(process.env.TARGET_GROUP_ID, data); // ID вашей группы
  
  const submissionConfirmationTexts = {
    UA: "Вашу заявку відправлено!",
    RU: "Ваша заявка отправлена!",
    ENG: "Your request has been sent!"
  };
  ctx.reply(submissionConfirmationTexts[userLanguage]);
  ctx.scene.leave();
});

formScene.action('cancel', (ctx) => {
  const userId = ctx.from.id.toString();
  const userLanguage = userData[userId] && userData[userId].userLanguage ? userData[userId].userLanguage : 'UA';
  const cancelationTexts = {
    UA: "Скасовано",
    RU: "Отменено",
    ENG: "Cancelled"
  };
  ctx.reply(cancelationTexts[userLanguage]);
  ctx.scene.leave();
});

const stage = new Scenes.Stage([formScene]);
bot.use(stage.middleware());

bot.action("FILL_FORM", (ctx) => {
  ctx.scene.enter('formScene');
});

bot.command('start', (ctx) => ctx.scene.enter('formScene'));


bot.launch();