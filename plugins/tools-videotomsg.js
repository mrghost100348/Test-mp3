Module({
    pattern: 'vdo ?(.*)',
    fromMe: true,
    desc: "ptv Message to video message",
    use: 'whatsapp'
}, async (m,match) => {
let json = JSON.stringify(m.quoted)
if(m.reply_message && json.includes("ptvMessage")) {
const x = json.replace("ptvMessage","videoMessage");
m.quoted = JSON.parse(x)
m.forwardMessage(m.jid,m.quoted,{contextInfo:{isForwarded:false}})
} else { m.send("_Reply to a ptv message_") }
});
