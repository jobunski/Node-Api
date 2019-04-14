module.exports = app => {
  if (process.env.NODE_ENV != "test") {
    app.db.sequelize.sync().done(() => {
      app.set('port', process.env.PORT || 3000);
      app.listen(app.get('port'), () =>{
        console.log(`Jtask API - Port ${app.get('port')}`);
      });
    });
  }
};
