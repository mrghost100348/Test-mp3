let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄* ❯
│ _⚠️This Is A Testing Of This Type Of Menu_
│ *Choose A Number To Get Menu*
│ 1.0 For *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄*
╰─────────────⦁

╭───❮  *🎯𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺 𝚂𝚄𝚁𝙴𝚂𝙷☘️
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
