import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://some-random-api.com/img/pikachu');
    const img = await res.json();
    const caption = `_Pikachu_`.trim();
    conn.sendFile(m.chat, img[0].url, 'pikachu.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};
handler.help = ['pikachu'];
handler.tags = ['random'];
handler.command = /^pikachu$/i;
handler.fail = null;
export default handler;
