var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shop');

db.serialize(function() {
  // db.run("DROP TABLE userdetails");
  // db.run("UPDATE user SET password='Today@123' WHERE ID=1")
  db.run("CREATE TABLE IF NOT EXISTS product (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price NUMBER, quantity NUMBER, property TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS category (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");  
  db.run("CREATE TABLE IF NOT EXISTS category_product (CATEGORYID INTEGER, PRODUCTID INTEGER, PRIMARY KEY(CATEGORYID, PRODUCTID), FOREIGN KEY(CATEGORYID) REFERENCES category(ID), FOREIGN KEY(PRODUCTID) REFERENCES product(ID) )");
  db.run("CREATE TABLE IF NOT EXISTS user (ID INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT, type TEXT, social NUMBER)") ;
  db.run("CREATE TABLE IF NOT EXISTS salesorder (ID INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, buyer TEXT,  items TEXT)") ;
  db.run("CREATE TABLE IF NOT EXISTS userdetails (ID INTEGER, name TEXT, address TEXT, mobile TEXT)");

  // const property = {
  //     color: "Pink",
  //     width: "9cm",
  //     length: "25cm"
  // }

  // console.log(JSON.stringify(property));

  // let stmt = db.prepare("INSERT OR IGNORE INTO category_product VALUES (?,?)");
  // stmt.run(1, 3, (err,row)=>{
    
  // });
    


  // stmt = db.prepare("INSERT OR IGNORE INTO user VALUES (NULL,?,?,?,?)");
  // stmt.run("admin","Password!1", "admin", 0, (err,row)=>{
  // 	stmt.finalize();
  // });
  
  // db.all("SELECT * FROM user", (err,row)=>{
  // 	console.log(row);
  // });

  // db.each("SELECT * FROM product", function(err, row) {
  //     console.log(row);
  // });

  // db.each("SELECT * FROM category_product", function(err, row) {
  //     console.log(row);
  // });
});

// db.close();




module.exports = db;