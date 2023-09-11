let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}alive_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}infobot_
│ _${usedPrefix}listprem_
│ _${usedPrefix}ping_
│ _${usedPrefix}report_
│ _${usedPrefix}runtime_
│ _${usedPrefix}script_
╰─────────────⦁

╭───❮  *🎯𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺 𝚂𝚄𝚁𝙴𝚂𝙷☘️
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('🤖')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['1.0'] 

export default handler
