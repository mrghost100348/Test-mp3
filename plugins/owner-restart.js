if (command == 'gn') {
    const res = (await axios.get(`https://raw.githubusercontent.com/AbhishekSuresh2/ABHISHEK-SER/main/src/Abhi-Json/random-ff`)).data;
    const res2 = await res[Math.floor(res.length * Math.random())];
    await conn.reply(m.chat, Good Night, m);
    conn.sendMessage(m.chat, res2 );
  }
};
