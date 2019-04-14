// module.exports = app =>{
//   const Users = app.db.models.Users;
//
//   app.route("/user")
//     .all(app.auth.authenticate())
//     /*
//     *@api {get} /user Return authenticated user data
//     *@apiGroup User
//     *@apiHeader {String} Authorization Token of authenticted User
//     *@apiHeaderExample {json} Headr
//     *   {"Authorization": " JWT xyz.abc.123.hgf"}
//     *@apiSuccess {Number} id User id
//     *@apiSuccess {String} name User name
//     *@apiSuccess {String}  email User email
//     *@apiSuccessExample {json} Success
//     *  HTTP/1.1 200 OK
//     *   {
//     *     id: 1
//     *     "name": "John Connor",
//     *     "email": "john@corner.net",
//     *   }
//     *@apiErrorExample {json} Find Error
//     *   HTTP/1.1 412 Precondition Failed
//     **/
//     .get((req,res) => {
//           Users.findById(req.user.id,{
//             attributes:["id","name","email"]
//           })
//             .then(result => res.json(result))
//             .catch(error => {
//               res.status(412).json({msg: error.message});
//             });
//         })
//
//         /*
//         *@api {delete} /user Deletes authenticated user
//         *@apiGroup User
//         *@apiHeader {String} Authorization Token of authenticted User
//         *@apiHeaderExample {json} Header
//         *   {"Authorization": "xyz.abc.123.hgf"}
//         *@apiSuccessExample {json} Success
//         *  HTTP/1.1 204 No Content
//         *@apiErrorExample {json} Delete Error
//         *   HTTP/1.1 412 Precondition Failed
//         **/
//     .delete((req,res) => {
//       Users.destroy({where: {id: req.user.id} })
//         .then(result => res.sendStatus(204))
//         .catch(error => {
//           res.status(412).json({msg: error.message})
//         });
//     });
//
//
//     /*
//     *@api {post} /user Return a new user
//     *@apiGroup User
//     *@apiSuccess {String} name User name
//     *@apiSuccess {String} email User email
//     *@apiSuccess {String}  password User password
//     *@apiSuccessExample {json} Success
//     *  HTTP/1.1 200 OK
//     *   {
//     *     "name": "John Connor",
//     *     "email": "john@corner.net",
//     *     "password": "123456"
//     *   }
//     *@apiSuccess {Number} id User id
//     *@apiSuccess {String} name User name
//     *@apiSuccess {String} email User email
//     *@apiSuccess {String}  password User password
//     *apiSuccess {Date} updated_at Updates's date
//     *apiSuccess {Date} created_at Regster's date
//     *@apiSuccessExample {json} Success
//     *  HTTP/1.1 200 OK
//     *   {
//     *     "id": 1,
//     *     "name": "John Connor",
//     *     "email": "john@corner.net",
//     *     "password": "123456"
//     *     "updated_at": "2016-02-10T15:20:11.700Z",
//     *     "created_at": "2016-02-10T15:29:11.700Z",
//     *   }
//     *@apiErrorExample {json} Find Error
//     *   HTTP/1.1 412 Precondition Failed
//     **/
//   app.post("/users",(req,res) => {
//       Users.create(req.body)
//         .then(result => res.sendStatus(204))
//         .catch(error => {
//            // CRUDify API resources 45
//           res.status(412).json({msg: error.message});
//         });
//     });
//
// };
