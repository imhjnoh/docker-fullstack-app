// pool 생성
const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'imhjnoh',
  database: 'myapp'
});
exports.pool = pool;
