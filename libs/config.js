module.exports = {
  database : "Jtask",
  username : "",
  password : "",
  params : {
    dialect : "sqlite",
    storage : "jtask.sqlite",
    define : {
      underscored : true
    }
  },
  jwtSecret: "Jtask-API",
  jwtSession:{session: false}
}
