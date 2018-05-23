var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shop');

db.serialize(function() {
    // db.run("DROP TABLE user")
  // db.run("DELETE FROM user WHERE email='paulwangdalijr@gmail.com'");
  db.run("CREATE TABLE IF NOT EXISTS product (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price NUMBER, quantity NUMBER, property TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS user (ID INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT, type TEXT, social NUMBER)") ;
//   const property = {
//       color: "Red",
//       weight: 10,
//       length: 6
//   }
  let stmt = db.prepare("INSERT OR IGNORE INTO user VALUES (NULL,?,?,?,?)");
  stmt.run("admin","Password!1", "admin", 0, (err,row)=>{
  	stmt.finalize();
  });
  
  db.all("SELECT * FROM user", (err,row)=>{
  	console.log(row);
  });

//   db.each("SELECT * FROM product", function(err, row) {
//       console.log(row);
//   });
});

// db.close();




module.exports = db;