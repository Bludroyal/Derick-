//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517";
global.owner = process.env.OWNER_NUMBER || "2349164718113";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9BSGw2MXNlY1BXWVBqdG5xQlpYZ0FxZFl0VHY2UzZTTjd4VHI2MUZXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZ3OGR4L3V4YlJjNU43bjZidWxoODl2YnhwV2xmUUdiYlRyOWhaQ3R3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTnRDSFIwWTV5L3dnc2lKRGVrNDlDb3lFeHBMd1dhcVdOZGdtenhxcVdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbklqaFpoazRDeGYybkJtVlRFTkxBZVc2b3RxMHh1Tkg4WjBPeDFCK2s0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFOXVrK2hZaW5DNklxS05lUmdhOGUwWmp6czdKTmorRjZwZHBrTEFCa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcxRmhyWVpSTDFqUjU0RUFtN1IyYnU2aGtVZnZWc1czWXMzTHl2SjN0d0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUp0M3Z2NDk1ckNsUUhaalRyVVROOGdMUkpwQnVCdi9ldXRiRzZPcU1XWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEJ5NVdGdTFIeHNWVGxqWW95Ujc0cXFqRktSblJpbFQrNjhPbE5QWjd6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ0cXJHVS9qWjA1aldXOFphWTBDbjRuK05KT0J6M2lWOWpPaXBtLzIxL3hrd3dyaHB6YTA5OFZQellKblZzUE0wblNDOWQrV0N6cGN0Q3IvWmo4dmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJsZWhYOU9GUnZ2R3BJdXVMYTVjbVpKbmNnbWVmc0NwWk4rUlhtT1FTLytrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUaFpVclNHN1M4eVRTWk9NSkVkMGR3IiwicGhvbmVJZCI6ImFmMmFjYmM3LTAzMzctNDNlZC05YTUwLTRiY2YwYWUxMDk5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOG9hMENGR2I5anpIcU9uNWpiKzdlWWZFOWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEppYTRUclFvSlE0eWNVbjFZWEtXbVpWTzBjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQyR1hIUUFNIiwibWUiOnsiaWQiOiIyMzQ5MTY0NzE4MTEzOjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoaW5lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU2wzL1VHRUtmVmtMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRN25zOHNqaGdHWk9hcmZZQ1Ztdk93dnZYQTdRR2swb09wV3psZEN4ZGpRPSIsImFjY291bnRTaWduYXR1cmUiOiJFd1BBRkZZNmhMK1F6ejRNNkJyNDl1UUFydWlqNWV6Sk95bjZmSUtJWk5jYU00bHB1N1k5dzdnTnRmWitSaGJtb1NZQ2ZXLzdGSVRscmROL1RWN2dDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM0wxaGlRZTBnaUhuWjNNS3ZKT1IwM29LeTFSL1FsOXhSVnoxeHlOdnJyVUFiSjIwdkhyU1FTM0Z5akRVY2JKcG5QL0xNVUt3WG5pL05Bdkk2VU96Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY0NzE4MTEzOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVPNTdQTEk0WUJtVG1xMzJBbFpyenNMNzF3TzBCcE5LRHFWczVYUXNYWTAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0MjM0NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFg5In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "☯︎shi ne✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎shi ne✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎shi ne✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
