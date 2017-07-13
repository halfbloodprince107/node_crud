/**
 * Created by consultadd on 9/2/17.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'testuser',
    password : 'password',
    database : 'testdb'
});


connection.connect();

// connection.query()
module.exports = connection;


// var employee = { first_name: 'ishaaa', last_name: 'buk' ,mobile:55555};
// connection.query('INSERT INTO customers SET ?', employee, function(err,res){
//     if(err) throw err;
//
//     console.log('Last insert ID:', res.insertId);
// });
// connection.query('SELECT * from customers', function(err, rows, fields) {
//     if (!err)
//         console.log('The solution is: ', rows);
//     else
//         console.log('Error while performing Query.');
// });
// connection.end();