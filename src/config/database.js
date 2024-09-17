const { Sequelize } = require('sequelize');

// Initialize Sequelize for PostgreSQL
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/InternSala', {
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;
