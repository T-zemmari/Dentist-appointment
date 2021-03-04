let config = require('./config/config.json');
const environment = process.env.NODE_ENV || 'development';
config = config[environment];

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.database,
    process.env.MYSQL_USER || config.username,
    process.env.MYSQL_PASSWORD || config.password,
    {
        host: process.env.MYSQL_HOST || config.host,
        port: process.env.MYSQL_PORT || config.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

module.exports = sequelize.authenticate().then((db)=>{
    console.log('mysql connect success'); return db;
});