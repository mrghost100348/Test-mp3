
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let av = `${pickRandom(["tuh", "twist", "test", "4", "h"])}`

m.reply( `Good Night ${taguser} `)
await m.reply(m.chat, av })
} 

handler.customPrefix = /^.gm$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
