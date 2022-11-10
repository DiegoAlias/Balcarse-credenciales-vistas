const db = require("mysql2-promise")();

db.configure ({
  host     : "sql811.main-hosting.eu",
  database : "u748790910_Credentials",
  user     : "u748790910_Credentials",
  password : "Credentials123",
  port:      3306
});

module.exports = db;