module.exports = {
  database : "Jtask",
  username : "",
  password : "",
  params : {
    dialect : "sqlite",
    storage : "jtask.sqlite",
    logging : false,
    define : {
      underscored : true
    }
  },
  jwtSecret: "Jtask-API",
  jwtSession:{session: false}
}
