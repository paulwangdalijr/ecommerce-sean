var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shop');

db.serialize(function() {
    // db.run("DROP TABLE product")
  db.run("CREATE TABLE IF NOT EXISTS product (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, price NUMBER, quantity NUMBER, property TEXT)");
 
//   const property = {
//       color: "Red",
//       weight: 10,
//       length: 6
//   }
//   let stmt = db.prepare("INSERT INTO product VALUES (NULL,?,?,?,?,?)");
//   stmt.run("Product 1","Desc 1", 4, 50, JSON.stringify(property) );
//   stmt.finalize();

//   db.each("SELECT * FROM product", function(err, row) {
//       console.log(row);
//   });
});

// db.close();




module.exports = db;