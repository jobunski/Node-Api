module.exports = (sequelize, DataTypes) =>{
  const Tasks = sequelize.define("Tasks",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
      autoincrement : true
    },
    title: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull: {msg:"Title is required"}
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
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
