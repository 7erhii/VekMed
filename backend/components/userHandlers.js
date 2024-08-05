import fs from "fs";
import path from "path";

const dbPath = path.resolve("./db/users.json");

export function loadUserData() {
  try {
    return JSON.parse(fs.readFileSync(dbPath, "utf8"));
  } catch (err) {
    console.error("Failed to read user data from file:", err);
    return {};
  }
}

export function saveUserData(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to save user data to file:", err);
  }
}

export function checkOrUpdateUser(ctx) {
  const userData = loadUserData();
  const userId = ctx.from.id.toString();
  const now = new Date();

  if (!userData[userId]) {
    userData[userId] = {
      userLanguage: "ua", // Устанавливаем язык по умолчанию
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
    if (
      ctx.from.username &&
      !user.userDescription.includes(ctx.from.username)
    ) {
      user.userDescription.push(ctx.from.username);
    }
    if (
      ctx.from.phone_number &&
      !user.userPhone.includes(ctx.from.phone_number)
    ) {
      user.userPhone.push(ctx.from.phone_number);
    }
    const lastEntry = new Date(user.entryDate[user.entryDate.length - 1]);
    const hoursDiff = Math.abs(now - lastEntry) / 36e5;
    if (hoursDiff > 24) {
      user.entryDate.push(now.toISOString());
    }
  }

  saveUserData(userData);
  return userData[userId];
}

export function updateUserLanguage(userId, language) {
  const userData = loadUserData();
  if (userData[userId]) {
    userData[userId].userLanguage = language;
    saveUserData(userData);
  }
}
