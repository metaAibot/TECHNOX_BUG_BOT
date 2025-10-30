// ✅ MegaTron Bot Stylish Configuration – by 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓

// 🔗 Import owner number from ./Owner/owner.js
const ownerNumber = require('./Owner/owner'); // 💡 owner.js should export array of numbers like ['2347043204941']

const config = {
  ownerNumber, // 👑 Owner Number(s)
  botName: '🤖 TECHNOX BUG BOT',       // 💥 Stylish Bot Name
  ownerName: 'INCOGNITO 🎭',             // 👑 Stylish Owner Name
 
  signature: '> INCOGNITO 🎭 ✓',              // 🖋️ Footer Signature

  autoTyping: false,     // ⌨️ Fake Typing Feature
  autoReact: false,      // 💖 Auto Emoji Reaction
  autoStatusView: false, // 👁️ Auto Status Seen
  public: true,          // 🌍 Public or Private Mode
  antiLink: false,       // 🚫 Anti-Link Protection
  antiBug: false,        // 🛡️ Anti Crash/Bug Guard
  greetings: true,       // 🙋 Auto Greeting
  readmore: false        // 📜 Enable Readmore Effect
};

// ✅ Register owner number globally in full WhatsApp JID format
global.owner = (
  Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber]
).map(num => num.replace(/\D/g, '') + '@s.whatsapp.net');

// ⚙️ Export settings loader
function loadSettings() {
  return config;
}

module.exports = { loadSettings };