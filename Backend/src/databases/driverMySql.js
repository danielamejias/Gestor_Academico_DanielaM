const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: '',
  database: 'mi gestor universidad'
});
mysqlConnection.connect((err) => {
  if (err) throw err;
  console.log('mysql =========> Conexión exitosa');
});

module.exports = mysqlConnection;