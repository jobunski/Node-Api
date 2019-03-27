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
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Tasks);
        }
      }
    });
    return Users;
}
