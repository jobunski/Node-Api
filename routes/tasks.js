module.exports = app => {
  const Tasks =  app.db.models.Tasks;

  app.route("/tasks")
    // .all(app.auth.authenticate())
    /*
    *@api {get} /task List User's task
    *@apiGroup Tasks
    *@apiHeader {String} Authorization Token of authenticted User
    *@apiHeaderExample {json} Headr
    *   {"Authorization": " JWT xyz.abc.123.hgf"}
    *@apiSuccess {Object[]} tasks Task list
    *@apiSuccess {Number} tasks.id Task id
    *@apiSuccess {String} tasks.title  Task title
    *@apiSuccess {Boolean} tasks.done Task is done?
    *apiSuccess {Date} tasks.updated_at Updates's date
    *apiSuccess {Date} tasks.created_at Regster's date
    @apiSuccess {Number} tasks.user_id Id to user
    *@apiSuccessExample {json} Success
    *  HTTP/1.1 200 OK
    *   {
    *     "id": 1,
    *     "title": "Study",
    *     "done": "false"
    *     "updated_at": "2016-02-10T15:20:11.700Z",
    *     "created_at": "2016-02-10T15:29:11.700Z",
    *     "user_id": 1
    *   }
    *@apiErrorExample {json} List Error
    *   HTTP/1.1 412 Precondition Failed
    **/
    .get((req,res) => {
      Tasks.findAll({
        where:{ user_id: req.user.id}
      })
        .then(result => res.json(result))
        .catch(error =>{
          res.status(412).json({msg: error.message})
        });
    })
    /*
    *@api {post} /task Register task
    *@apiGroup Tasks
    *@apiHeader {String} Authorization Token of authenticted User
    *@apiHeaderExample {json} Headr
    *   {"Authorization": " JWT xyz.abc.123.hgf"}
    *@apiSuccess {Number} tasks.id Task id
    *@apiSuccess {String} tasks.title  Task title
    *@apiSuccess {Boolean} done=fasle Task is done?
    *apiSuccess {Date} tasks.updated_at Updates's date
    *apiSuccess {Date} tasks.created_at Regster's date
    @apiSuccess {Number} tasks.user_id Id to user
    *@apiSuccessExample {json} Success
    *  HTTP/1.1 200 OK
    *   {
    *     "id": 1,
    *     "title": "Study",
    *     "done": "false"
    *     "updated_at": "2016-02-10T15:20:11.700Z",
    *     "created_at": "2016-02-10T15:29:11.700Z",
    *     "user_id": 1
    *   }
    *@apiErrorExample {json} List Error
    *   HTTP/1.1 412 Precondition Failed
    **/
    .post((req,res) => {
      // req.body.user_id = req.user.id;
      Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg:error.message})
        })
    });


  app.route("/tasks/:id")
    // .all(app.auth.authenticate())
    /*
    *@api {get} /task/:id Get a task
    *@apiGroup Tasks
    *@apiHeader {String} Authorization Token of authenticted User
    *@apiHeaderExample {json} Headr
    *   {"Authorization": " JWT xyz.abc.123.hgf"}
    *@apiSuccess {id} id Task id
    *@apiSuccess {Number} tasks.id Task id
    *@apiSuccess {String} tasks.title  Task title
    *@apiSuccess {Boolean} done=fasle Task is done?
    *apiSuccess {Date} tasks.updated_at Updates's date
    *apiSuccess {Date} tasks.created_at Regster's date
    @apiSuccess {Number} tasks.user_id Id to user
    *@apiSuccessExample {json} Success
    *  HTTP/1.1 200 OK
    *   {
    *     "id": 1,
    *     "title": "Study",
    *     "done": "false"
    *     "updated_at": "2016-02-10T15:20:11.700Z",
    *     "created_at": "2016-02-10T15:29:11.700Z",
    *     "user_id": 1
    *   }
    *@apiErrorExample {json} Task  not found  Error
    *   HTTP/1.1 4o4 Not Found
    *@apiErrorExample {json} Find Error
    *   HTTP/1.1 412 Precondition Failed
    **/
    .get((req,res) => {
      Tasks.findOne({where : {
        id: req.params.id,
        user_id: req.user.id
      }})
        .then(result => {
          if (result) {
            res.json(result)
          } else {
            res.sendStatus(404)
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    /*
    *@api {put} /task/:id  Update task
    *@apiGroup Tasks
    *@apiHeader {String} Authorization Token of authenticted User
    *@apiHeaderExample {json} Headr
    *   {"Authorization": " JWT xyz.abc.123.hgf"}
    *@apiParam {id} id Task id
    *@apiParam {String} tasks.title  Task title
    *@apiParam {Boolean} done Task is done
    @apiParamExample {json} Input
    * {
    *     "title": "Work",
    *     "done": true
    * }
    *@apiSuccessExample Success
    *  HTTP/1.1 204 No Content
    *@apiErrorExample {json} Update Error
    *   HTTP/1.1 412 Precondition Failed
    **/
    .put((req,res) => {
      Tasks.update(req.body,{where: {
        id:req.params.id,
        user_id: req.user.id
      }})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    /*
    *@api {delete} /task/:id  Remove task
    *@apiGroup Tasks
    *@apiHeader {String} Authorization Token of authenticted User
    *@apiHeaderExample {json} Headr
    *   {"Authorization": " JWT xyz.abc.123.hgf"}
    *@apiParam {id} id Task id
    *@apiSuccessExample Success
    *  HTTP/1.1 204 No Content
    *@apiErrorExample {json} Update Error
    *   HTTP/1.1 412 Precondition Failed
    **/
    .delete((req,res) => {
      Tasks.destroy({where: {
        id:req.params.id,
        user_id: req.user.id
      }})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message})
        });
    });
};
