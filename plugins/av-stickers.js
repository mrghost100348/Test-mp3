let handler = m => m
handler.all = async function (m) {

    if (/^test$/i.test(m.text)) {
        // Replace 'sticker_path' with the actual path to your sticker image
        let stickerPath = './src/stickers/test.png';
        this.sendSticker(m.chat, stickerPath, m);
    }
  
return !0
 }
 
export default handler
