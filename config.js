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
global.owner = process.env.OWNER_NUMBER || "2349038184016";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhtZlhjWExadlhkVVY3TVZLMFdSTlNZcGpIT3JaWFlmRGlObkJVdksyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlh1UU5aUHQzRVpYTHU1Rmsvc1pjS3QzL1B5dlZoOWdZck1sUVErN0JBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRG5QT1kzWURZRlBKRDFzNDJCcjJOcjlBRUNxaER6V0ZveXRuaUJFNjJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMRU1sRG53VWJlY3NMYXR2ZDVES2VhMG1qakxoT054OGJCRmtKZC9vOFZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCWlhOUkh2WmpmUll0MTdTN0kreUhXNW90S3l0U09PZ21JYXYzTldIa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBWUklVNWkyWTVyZ2VndThOTksvT01PSld1TmVmN2NHdjdsU1pPVURRbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtLb2VVa0dpenV1UDRrNXpjYWUrTHFldUM5RXVRYXhzU3R5QUI5TkpsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FyQ1NpWCs4dEM2QVRnWmRRZWdaZUl5TDZQdFY0TnN2K2V0UWhWakIzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYrTngrTlkyYjJXK1dtSFRXVFhBVEdINmN3a1ZPU0xIQmtHUERGS3h3ZVBRaVFwYnhrWFVoL0VZeWQvTTNrQ2pObXhLMjlOVGVhV1A1QXJBWTlObkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiI0UW5ZcTlpSmxRRkxsYkd0VE1hMU8zWkJWVHRvWFNPZ0lrMDYxTkk2MEtRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTWUlHcGZWM1NDdVZCd082R2ZTN3BRIiwicGhvbmVJZCI6IjAyODk3NzNjLTM4NDQtNDRiZi04YjQ4LWE3Y2NmOWRmZTM5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5K3M0R015cEZKK3h0blgzRVhkM0dhc2RMY0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUVWZkdMZDBQN2VCa0N3MVJJWmsyMDNNOW40PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktDWDFERjRGIiwibWUiOnsiaWQiOiIyMzQ5MDM4MTg0MDE2OjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJL3F5TndHRUxPWGk3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmYVBxSm1TdGM4V3pudG1OUFhZWEVxYjBnWnRTZEJ5VVNVckdoL1JkTVdVPSIsImFjY291bnRTaWduYXR1cmUiOiJBYVQ3d0l2d2YyUGFrNVlNeXMvSWQ4bmdjTnVlZE56b2lWb0hMRC9hajBMT1d1ME91a093UFhxZzY1VDhNRlVTWjBpZWdqSDAzOVFlRGNFZE9KQUxCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGx5VlozV3pRN2ZVVExWYUxDZnRzR08yaFBySEpESm5wcVVKZzI0czhXRnExbzlTRFcrajFUNWMzU2lBdXIveFdqT1dQSTh0Y0pVTTB0eFNHNUdmQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM4MTg0MDE2OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgyajZpWmtyWFBGczU3WmpUMTJGeEttOUlHYlVuUWNsRWxLeG9mMFhURmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ1Mjc5MzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWZlIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SUCK MY BALLS `",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "SICK",
  botname: process.env.BOT_NAME || "☯︎SUCK MY BALLS✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎SUCK MY BALLS ✌︎💨",
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
  LANG: (process.env.THEME || "☯︎SUCK MY BALLS✌︎💨").toUpperCase(),
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
