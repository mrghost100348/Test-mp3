let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerbot = "./src/bot.webp"
let stikerbyegc = "./src/bot.webp"
if (command == 'bot') {
conn.sendFile(m.chat, stikerbot, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯', body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: imagen1}}})  
}
if (command == '.git') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯', body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: imagen1}}})
}}
handler.command = ['bot', '.git']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
