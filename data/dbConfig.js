// Complete your db configuration using the `environment` variable.
const knex = require('knex');

const config = require('../knexfile');

const environment = process.env.NODE_ENV || "development";

const db = knex(config.environment);
