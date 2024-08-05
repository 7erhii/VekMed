import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function userPhoto(ctx) {
  const userId = ctx.from.id.toString();
  const userDir = path.join(__dirname, "./db/images", userId);
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }

  try {
    const photos = await ctx.telegram.getUserProfilePhotos(userId);
    if (photos && photos.total_count > 0) {
      const fileId = photos.photos[0][0].file_id;
      const fileLink = await ctx.telegram.getFileLink(fileId);
      const response = await fetch(fileLink);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(userDir, "image.png"), buffer);
      console.log("Avatar saved for user:", userId);
    } else {
      console.log("No profile photo found for user:", userId);
    }
  } catch (error) {
    console.error("Failed to download or save user photo:", error);
  }
}
