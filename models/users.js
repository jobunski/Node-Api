import bycrpt from "bcrypt";

module.exports = (sequelize,dataType) => {
    const Users = sequelize.define("Users", {
      id: {
        type: dataType.INTEGER,
        primaryKey : true,
        autoincrement : true
      },
      name : {
        type: dataType.STRING,
        allowNull : false,
        validate : {
          notEmpty: true
        }
      },
      password : {
        type: dataType.STRING,
        allowNull : false,
        validate : {
          notEmpty: true
        }
      },
      email: {
        type: dataType.STRING,
        unique: true,
        allowNull : false,
        validate : {
          notEmpty: true
        }
      }
    },{
      hook: {
        beforeCreate : user => {
          const salt = bycrpt.genSaltSync();
          user.password = bycrpt.hashSync(user.password,salt);
        }
      },
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Tasks);
        },
        isPassword : (encodedPassword,password) =>{
          return bycrpt.compareSync(password,encodedPassword);
        }
      }
    });
    return Users;
}
