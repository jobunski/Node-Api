module.exports = app =>{
  const Users = app.db.models.Users;

  app.route("/user")
    .all(app.auth.authenticate())
    .get("users/:id",(req,res) => {
          Users.findById(req.user.id,{
            attributes:["id","name","email"]
          })
            .then(result => res.json(result))
            .catch(error => {
              res.status(412).json({msg: error.message});
            });
        })
    .delete("users/:id",(req,res) => {
      Tasks.destroy({where: {id: req.user.id} })
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message})
        });
    });
  app.post("/users",(req,res) => {
      Users.create(req.body)
        .then(result => res.sendStatus(204))
        .catch(error => {
           // CRUDify API resources 45
          res.status(412).json({msg: error.message});
        });
    });

};
