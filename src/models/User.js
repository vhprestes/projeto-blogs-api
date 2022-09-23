const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING(64),
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    }
  );
  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost, {
  //   User.hasMany(models.BlogPost, { foreignKey: 'userId' });
  // };

  return User;
};

module.exports = userModel;

// src https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/bd9d0dc0-6490-4cd9-ba49-55e7fd741ed9
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/cfc6c9f9-b329-4107-8e2b-6f8ff331bf28
// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
