const { Sequelize } = require("sequelize");

// const connection = new Sequelize(process.env.WHATEVER_IS_IN_YOUR_ENV_FILE);

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

module.exports = connection;