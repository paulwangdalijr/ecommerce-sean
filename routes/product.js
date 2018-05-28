const database = require('../config/database');
const express = require('express');
const router = express.Router();

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

updateCategoryTable = (productID, req, res) =>{
	let cat_prod = req.body.cat_prod;
	cat_prod.forEach(obj => {
		obj.PRODUCTID = productID;	
	});	
	console.log(productID);
	
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
							res.json({success: true, message: "Product added"});
						}
					}
				});		
			});	

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
				  		updateCategoryTable(stmt.lastID, req, res);
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
					  		updateCategoryTable(req.body.product.id, req, res);
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

	// SELECT product.ID product.name product.description product.price product.quantity product.property" + 
	//     			"FROM product INNER JOIN category_product ON product.ID = category_product.CATEGORYID" + 
	//     			"INNER JOIN category ON ", 

	// router.post('/newProduct', (req, res) => {
	//         if(!req.body.title){
	//             res.json({success: false, message: 'Title is required.'});
	//         }else if(!req.body.body){
	//             res.json({success: false, message: 'Body is required.'});       
	//         }else if(!req.body.createdBy){
	//             res.json({success: false, message: 'CreatedBy is required.'});            
	//         }else{
	//             const blog = new Blog({
	//                 title: req.body.title,
	//                 body: req.body.body,
	//                 createdBy: req.body.createdBy
	//             });
	//             blog.save((err) => {
	//                 if(err){
	//                     if(err.errors){
	//                         if(err.errors.title){
	//                             res.json({ success: false, message: err.errors.title.message});
	//                         }else if(err.errors.body){
	//                             res.json({ success: false, message: err.errors.body.message}); 
	//                         }else if(err.errors.createdBy){
	//                             res.json({ success: false, message: err.errors.createdBy.message}); 
	//                         }else{
	//                             res.json({ success: false, message: err});
	//                         }
	//                     }else{
	//                         res.json({ success: false, message: err});
	//                     }
	//                 }else{
	//                     res.json({ success: true, message: "Blog created!"});
	//                 }
	//             });
	//         }
	//     });

	return router;
}

