var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', 
    user: 'tqhx72ocx9jodip1', 
    password: 'dj2r00gwxopfighz',
    database: 'burgers_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;