module.exports = async function ({ reply }) {
  const start = Date.now();
  const end = Date.now();
  const speed = end - start;

  const styledPing = `
╭───────────────⭓
│  ⚡ 𝗣𝗜𝗡𝗚 𝗖𝗛𝗘𝗖𝗞
       
       𝗠𝗘𝗚𝗔𝐓𝐑𝐎𝐍
│
│  📡 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲: *${speed}ms*
│  💠 𝗦𝘁𝗮𝘁𝘂𝘀: *Online*
│  🔋 𝗣𝗼𝘄𝗲𝗿: *Stable*
╰───────────────⭓

> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓
`;

  reply(styledPing);
};