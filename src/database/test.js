const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-3.1442911",
    lng: "-58.4500785",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabiliadde social.",
    whatsapp: "(92) 991740853",
    images: [
      "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop =entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "venha para se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de Visitas Das 18h até 8h",
    open_on_weekends: "0",
  });
  //consultar dados na tabela
  const selectOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectOrphanages);

  //consultar somente 1 orphanato, pelo id
  const orphanage = await db.all("SELECT * FROM orphanages WHERE id='2'");
  console.log(orphanage);

  /*
    //deletar dado da tabela

    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))*/
});
