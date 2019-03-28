module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () =>{
      console.log(`Jtask API - Port ${app.set("port")}`);
    });
  });
};
