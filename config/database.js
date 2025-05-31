const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_node',
    password: '12345678',
    port: 3306
});

module.exports = connection;