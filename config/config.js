require("dotenv").config();
module.exports =
{
  "development": {
    "username": "postgres",
    "password": process.env.PASSWORD || null,
    "database": "anchorChart",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "anchorChart",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "anchorChart",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}