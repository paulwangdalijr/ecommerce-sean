const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const database = require('../config/database');

const router = express.Router();

router.post('/login', function(req, res, next) {
  if(!req.body.username){
    res.json({success: false, message: 'Username not provided!'});
  }else if(!req.body.password){
    res.json({success: false, message: 'Password not provided!'});
  }else{
    database.get("SELECT * FROM user WHERE email = ? AND password = ? AND social = 0", [req.body.username, req.body.password], (err,row)=>{
        if(err || row === undefined){
            res.json({ success: false, message: "Username or password invalid" });
        }else{
            const token = jwt.sign({ userId: row.ID }, config.secret, { expiresIn: '24h'});
            res.json({success: true, message: 'Login successful', token: token, user: {username: row.email, type: row.type} });
        }
    });
  }
});

router.post('/register', (req, res) => {
    if( !req.body.email && req.body.email === '' ){
        res.json({ success: false, message: 'You must provide an e-email' });
    }else if( !req.body.password && req.body.password === '' ){
        res.json({ success: false, message: 'You must provide an password' });
    }else{
        stmt = database.prepare("INSERT OR IGNORE INTO user VALUES (NULL,?,?,?)");
        stmt.run(req.body.email.toLowerCase(),req.body.password,'user', 0, (err,row)=>{
            if(err){
				res.json({success: false, message: "User operation failed"});                
            }else{
				res.json({success: true, message: "Account created"});       
            }
        });      
    }

});

router.get('/checkEmail/:email', (req,res) => {
    if(!req.params.email){
        res.json({success: false, message: 'Email not provided!'});
    }else{
        database.get("SELECT email FROM user WHERE email = ?", req.params.email, (err,row)=>{
            if(err){
                res.json({success: false, message: 'Error!'});    
            }else{            
                if(row){
                    res.json({success: false, message: 'Email is already taken!'});     
                }else{
                    res.json({success: true, message: 'Email is available!'});                
                }
            }
        });
    }
});



router.use((req, res, next) => {
    const token = req.headers['x-auth-token'];
    if(!token){
        res.json({success: false, message: 'No token provided!'});
    }else{
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err){
                res.json({success: false, message: 'Token invalid! ' + err});
            }else{
                req.decoded = decoded;
                next();                                       
            }
        });
    }
});

router.get('/profile', (req, res) => {
	database.get("SELECT email, type FROM user WHERE ID = ?", [req.decoded.userId], (err,row)=>{
		if(err){
			res.json({ success: false, message: "Invalid user: " + err });
		}else{
            if(row.type !== 'admin'){
                res.json({ success: true, user: row.email });
            }else{
                res.json({ success: false, message: "No profile for admin users" });
            }
		}
	});
});

router.get('/adminprofile', (req, res) => {
    database.get("SELECT type FROM user WHERE ID = ?", [req.decoded.userId], (err,row)=>{
        if(err){
            res.json({ success: false, message: "Invalid user: " + err });
        }else{
            if(row.type === 'admin'){
                res.json({ success: true, user: row.email });
            }else{
                res.json({ success: false, message: "User not authorized" });
            }
        }
    });
});


module.exports = router;
