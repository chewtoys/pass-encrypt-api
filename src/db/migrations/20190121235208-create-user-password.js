'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserPasswords', {
            userID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'userID'
                }
            },
            password: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.ENUM('enabled', 'disabled')
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserPasswords');
    }
};