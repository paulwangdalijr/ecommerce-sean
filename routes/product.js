const database = require('../config/database');
const express = require('express');
const router = express.Router();
const upload = require('../upload/upload');

checkAdmin = (id, cb) =>{
	database.get("SELECT type FROM user WHERE ID = ?", id, (err,row)=>{
        if(err){
        }else{
            if(row.type === 'admin'){
                return cb(true);
            }
        }
        return cb(false);
    });
}

updateCategoryTable = (productID, req, res, operation) =>{
	let cat_prod = req.body.cat_prod;
	cat_prod.forEach(obj => {
		obj.PRODUCTID = productID;	
	});	
	
	stmt = database.prepare("DELETE FROM category_product WHERE PRODUCTID = ?");
	stmt.run(productID, (err,row)=>{		
		if(err){
			res.json({success: false, message: "Category operation failed"});
		}else{
			let counter = cat_prod.length;
			cat_prod.forEach(obj => {
				stmt = database.prepare("INSERT OR IGNORE INTO category_product VALUES (?,?)");
				stmt.run(obj.CATEGORYID,obj.PRODUCTID, (err,row)=>{
					counter -= 1;
					if(err){
						res.json({success: false, message: "Category operation failed"});
					}else{
						if(counter === 0){
							return;
						}
					}
				});		
			});
			if(operation === "added"){
				res.json({success: true, id: productID, message: "Product " + operation});					
			}else{
				res.json({success: true, message: "Product " + operation});	
			}

		}
	});			
}


// take authRouter as parameter and return this route
module.exports = (authRouter) => {
	router.get('/getProducts', (req, res, next) => {
	    database.all("SELECT * FROM product", (err,productrows)=>{
	        if(err){
	            res.json({success: false, message: "Error getting products: " + err});
	        }else{
	        	database.all("SELECT * FROM category", (err, categoryrows)=>{
	        		if(err){
			            res.json({success: false, message: "Error getting categories: " + err});
			        }else{
			        	database.all("SELECT * FROM category_product", (err, cat_prodrows)=>{
			        		if(err){
					            res.json({success: false, message: "Error getting categories and products: " + err});
					        }else{
	            				res.json({success: true, product: productrows, category: categoryrows, cat_prod: cat_prodrows });
					        }
			        	});
			        }
	        	});
	        }

	    });
	});

	// router.post('/createOrder', (req, res, next) => {
	// 	if()
	// });

	authRouter.post('/newProduct', (req,res)=>{
		checkAdmin(req.decoded.userId, (flag) => {	
			if(flag){
				// name TEXT, description TEXT, price NUMBER, quantity NUMBER, property TEXT)");
				stmt = database.prepare("INSERT INTO product VALUES (NULL,?,?,?,?,?)");
				stmt.run(req.body.product.name,req.body.product.description, req.body.product.price, req.body.product.quantity, JSON.stringify(req.body.product.property), (err)=>{
				  	if(err){
				  		res.json({success: false, message: "Product operation failed"});
				  	}else{
				  		// res.json({success: true, id: stmt.lastID});
				  		updateCategoryTable(stmt.lastID, req, res, "added");
				  // 		let cat_prod = req.body.cat_prod;
				  // 		cat_prod.forEach(obj => {
				  // 			obj.PRODUCTID = stmt.lastID;	
				  // 		});	

				  // 		let counter = cat_prod.length;
				  // 		cat_prod.forEach(obj => {
				  // 			stmt = database.prepare("INSERT OR IGNORE INTO category_product VALUES (?,?)");
						// 	stmt.run(obj.CATEGORYID,obj.PRODUCTID, (err,row)=>{
						// 		counter -= 1;
						// 		if(err){
						// 			res.json({success: false, message: "Category operation failed"});
						// 		}else{
						// 			if(counter === 0){
						// 				res.json({success: true, message: "Product added"});
						// 			}
						// 		}
						// 	});		
						// });		  			  		
				  	}
				});
			}else{
				res.json({success: false, message: "User not authorized"});
			}
		});
	});

	authRouter.put('/editProduct', (req,res)=>{
		if(req.body.product.id){
			checkAdmin(req.decoded.userId, (flag) => {	
				if(flag){
					stmt = database.prepare("UPDATE product SET name = ?, description = ?, price = ?, quantity = ?, property = ? WHERE ID = ?");
					stmt.run(req.body.product.name,req.body.product.description, req.body.product.price, req.body.product.quantity, JSON.stringify(req.body.product.property), req.body.product.id, (err,row)=>{
					  	if(err){
					  		res.json({success: false, message: "Operation failed"});
					  	}else{
					  		// res.json({success: true, message: "Product updated"});
					  		updateCategoryTable(req.body.product.id, req, res, "updated");
					  	}
					});
				}else{
					res.json({success: false, message: "User not authorized"});
				}
			});
		}else{
			res.json({success: false, message: "Product ID is mandatory"});
		}
	});	

	authRouter.delete('/deleteProduct/:productID', (req,res)=>{
		if(req.params.productID){
			checkAdmin(req.decoded.userId, (flag) => {	
				if(flag){
					stmt = database.prepare("DELETE FROM product WHERE ID = ?");
					stmt.run(req.params.productID, (err,row)=>{
						if(err){
							res.json({success: false, message: "Operation failed"});
						}else{
							stmt = database.prepare("DELETE FROM category_product WHERE PRODUCTID = ?");
							stmt.run(req.params.productID, (err,row)=>{		
								if(err){
									res.json({success: false, message: "Category operation failed"});
								}else{
									res.json({success: true, message: "Product deleted" });
								}
							});
						}
					});
				}else{
					res.json({success: false, message: "User not authorized"});
				}
			});
		}else{
			res.json({success: false, message: "Product ID is mandatory"});
		}

	});

	authRouter.post('/newCategory', (req,res)=>{
		if(req.body.category){
			checkAdmin(req.decoded.userId, (flag) => {	
				if(flag){
					stmt = database.prepare("INSERT INTO category VALUES (NULL,?)");
					stmt.run(req.body.category, (err)=>{
					  	if(err){
					  		res.json({success: false, message: "Category operation failed"});
					  	}else{
					  		res.json({success: true, message: "Category added"});					  		
					  	}
					});
				}else{
					res.json({success: false, message: "User not authorized"});

				}
			});
		}else{
			res.json({success: false, message: "Category name is mandatory"});
		}
	});

	authRouter.delete('/deleteCategory/:id', (req,res)=>{
		if(req.params.id){
			checkAdmin(req.decoded.userId, (flag) => {	
				if(flag){
					stmt = database.prepare("DELETE FROM category WHERE ID = ?");
					stmt.run(req.params.id, (err,row)=>{
						if(err){
							res.json({success: false, message: "Operation failed"});
						}else{
							stmt = database.prepare("DELETE FROM category_product WHERE CATEGORYID = ?");
							stmt.run(req.params.id, (err,row)=>{		
								if(err){
									res.json({success: false, message: "Category operation failed"});
								}else{
									res.json({success: true, message: "Category deleted" });
								}
							});
						}
					});
				}else{
					res.json({success: false, message: "User not authorized"});
				}
			});
		}else{
			res.json({success: false, message: "Category ID is mandatory"});
		}
	});

	authRouter.post('/imageUpload', (req,res)=>{
		checkAdmin(req.decoded.userId, (flag) => {	
			if(flag){
				upload(req, res, (err)=>{
					if(err){						
						res.json({success: false, message: "Image upload failed"});								
					}else{
						res.json({success: true, message: "Image uploaded"});								
						
					}
				});
			}else{
				res.json({success: false, message: "User not authorized"});				
			}
		});
	});


	authRouter.get('/orders', (req, res) => {
		checkAdmin(req.decoded.userId, (flag) => {	
			if(flag){
				database.all("SELECT * FROM salesorder", (err,rows)=>{
					if(err){
						res.json({ success: false, message: "Error getting orders: " + err });
					}else{
						res.json({ success: true, orders: rows });
					}
				});		
			}else{
				res.json({success: false, message: "User not authorized"});				
			}			
		});
	});


	return router;
}

