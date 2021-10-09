require('dotenv').config();
module.exports =
{
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD || null,
    "database": "anchorChart",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD || null,
    "database": "anchorChart",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PRODUCTION_USER,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false // <<<<<<< YOU NEED THIS
      }
    }

  }
}