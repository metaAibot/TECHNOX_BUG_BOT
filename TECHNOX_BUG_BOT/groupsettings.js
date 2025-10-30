module.exports = async function ({ conn, m, isGroup, isBotAdmin, isAdmin, isOwner, args, reply }) {
  if (!isGroup) return reply("❌ This command only works in groups.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");

  if (!isAdmin && !isOwner) return reply("❌ Only group admins or bot owner can use this.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");

  if (!isBotAdmin) return reply("❌ I need to be an admin to change group settings.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");

  const option = args[0]?.toLowerCase();

  if (!option) {
    return reply(
      "❌ Please specify a group setting to update.\n\n" +
      "_Options:_ announcement | not_announcement | locked | unlocked\n\n" +
      "💡 Example: `.groupsettings locked`\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ"
    );
  }

  try {
    switch (option) {
      case "announcement":
        await conn.groupSettingUpdate(m.chat, "announcement");
        return reply("✅ Group changed to *Admin Only Mode*\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");

      case "not_announcement":
        await conn.groupSettingUpdate(m.chat, "not_announcement");
        return reply("✅ Group changed to *Everyone Can Message*\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");

      case "locked":
        await conn.groupSettingUpdate(m.chat, "locked");
        return reply("✅ Group info is now *Locked* (Only Admins can edit)\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");

      case "unlocked":
        await conn.groupSettingUpdate(m.chat, "unlocked");
        return reply("✅ Group info is now *Unlocked* (All members can edit)\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");

      default:
        return reply("❌ Invalid option. Use: announcement, not_announcement, locked, unlocked\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");
    }
  } catch (err) {
    console.error("❌ Error in .groupsettings:", err);
    return reply("❌ Failed to update group settings. Try again.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓\nhttps://www.youtube.com/@TayyabExploitZ");
  }
};