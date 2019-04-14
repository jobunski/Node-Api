module.exports = app => {
  /*
  *@api {get} /API Status
  *@api Group Status
  *@api SUccess {String} status API Status' message
  *@api SUccessExample {json} Success
  *HTTP/1.1 200 OK
  *{"status": "Jtask API"}
  *
  */
  app.get("/", function (req,res) {
    res.json({ status: "Jtask API"});
  });
};
