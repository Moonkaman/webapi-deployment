const knex = require('knex');

console.log(process.env.DB_ENV)

const db = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[db];

module.exports = knex(config);
