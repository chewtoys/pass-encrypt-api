import * as Sequelize from 'sequelize';
import { initUser } from './user';

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
//const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(config);

const db = {
    sequelize,
    Sequelize,
    User: initUser(sequelize),
};

Object.values(db).forEach((model: any) => {
    if (model.associate) {
        model.associate(db);
    }
});

export default db;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });