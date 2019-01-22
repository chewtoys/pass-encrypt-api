'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPassword = sequelize.define('UserPassword', {
    password: DataTypes.STRING
  }, {});
  UserPassword.associate = function(models) {
    // associations can be defined here
  };
  return UserPassword;
};