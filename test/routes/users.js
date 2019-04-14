// import jwt from "jwt-simple"
//
// describe("Routes : Tasks", () => {
//   const Users = app.db.models.Users;
//   const jwtSecret = app.lib.config.jwtSecret;
//   let token;
//   beforeEach(done => {
//     // RUns before each test
//     Users
//       .destroy({where: {}})
//       .then(() => Users.create({
//         name:"John",
//         email:"jonsnow@gmail.com",
//         password:"12345"
//       }))
//       .then(user => {
//         token = jwt.encode({id: user.id}, jwtSecret);
//         done();
//       });
//   });
//   describe("GET /user", () => {
//     describe("status 200", () => {
//       it("Returns an authenticated user", done => {
//         // Test logic
//         request.get("/user")
//           .set("Authorization", `JWT ${token}`)
//           .expect(200)
//           .end((err,res) =>{
//             epect(res.body.name).to.eql("John");
//             expect(res.body.email).to.eql("jonsnow@gmail.com");
//             done(err);
//           });
//       });
//     });
//   });
//   describe("DELETE /user", () => {
//     describe("status 204", () => {
//       it("Deletes an authenticated user", done => {
//         // Test logic
//         request.delete("/user")
//           .set("Authorization", `JWT ${token}`)
//           .expect(200)
//           .end((err,res) => done(err));
//       });
//     });
//   });
//   describe("POST /user", () => {
//     describe("status 200", () => {
//       it("creates new user", done => {
//         // Test logic
//         request.post("/user")
//           .send({
//             name: "Mary",
//             email: "mary@gmail.com",
//             password: "12345"
//           })
//           .expect(200)
//           .end((err,res) => {
//             expect(res.body.name).to.eql("Mary");
//             expect(res.body.email).to.eql("mary@gmail.com")
//             done(err);
//           })
//       })
//     })
//   })
//
// })
