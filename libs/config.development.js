import logger from "./logger.js"

module.exports = {
  database : "Jtask",
  username : "",
  password : "",
  params : {
    dialect : "sqlite",
    storage : "jtask.sqlite",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`)
    },
    define : {
      underscored : true
    }
  },
  jwtSecret: "Jtask-API",
  jwtSession:{session: false}
}
