module.exports = (sequelize, dataType) =>{
  const Tasks = sequelize.define("Tasks",{
    id:{
      type: dataType.INTEGER,
      primaryKey : true,
      autoincrement : true
    },
    title : {
      type: dataType.STRING,
      allowNull : false,
      validate : {
        notEmpty : true
      }
    },
    done : {
      type: dataType.BOOLEAN,
      allowNull : false,
      defaultValue : false
    }
  },{
      classMethods : {
        associate: (models) => {
          Tasks.belongsTo(models.Users);
        }
      }
    });
  return Tasks;
};
