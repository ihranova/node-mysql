var mysql = require('mysql');
var pd = require('pretty-data').pd;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port : 3306,        
  database: 'cms' 
 
});
/*

//CONNECT SUCCESS

con.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn"); 
    
} else {
    console.log("Error connecting database ... nn");   
    throw err;
}
});

// INSERT NEW VALUES
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, pwd) VALUES ?";
  var values = [
    ['John', '35345345'],
    ['Peter', '35345345'],
    ['Amy', '35345345'],
    ['Hannah', '35345345'],
    ['Michael', '35345345'],
    ['Sandy', 'O35345345'],
    ['Betty', 'G35345345'],
    ['Richard', '35345345'],
    ['Susan', '35345345'],
    ['Vicky', 'Yellow35345345'],
    ['Ben', 'ParkLane8'],
    ['William', 'Ce35345345'],
    ['Chuck', 'MainRoad989'],
    ['Viola', 'Sid35345345']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

//PRINT VALIES
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query ("SELECT * FROM users",function(err, res, fields){
      if(err) throw err;
      console.log(res);   
      console.log(res[2].name);
  });
});


//CHECKING VALUES AND PRINT CURRENT DATA
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM users WHERE NAME = ?";
  var name = "ina";
  con.query(sql, name, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

*/
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query ("SELECT * FROM users",function(err, res, fields){
      if(err) throw err;
      var users = pd.json(res);  
      console.log(users);
      console.log("User 1 is: ")
      var user =res[1];
      console.log(user['name'] + " " +user.pwd);
  });
});

    

