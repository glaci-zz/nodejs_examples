var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '123456',
    database : 'test'
});

module.exports = connection;


    // connection.connect();
    // connection.query('SELECT * FROM `user`', function(err, rows, fields) {
    //   if (err) throw err;
    //   console.log('The solution is: ', rows);
    // });
    // connection.end();