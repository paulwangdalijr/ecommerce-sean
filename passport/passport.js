const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('../config/config');
const database = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (app, passport) => {

	app.use(passport.initialize());
	app.use(passport.session());

	passport.use(new FacebookStrategy({
	    clientID: '1995252417151614',
	    clientSecret: '4e1ad6fd085685318be2e75bfa5a6fed',
	    callbackURL: "http://localhost:3000/auth/facebook/callback",
	    profileFields: ['id', 'displayName', 'photos', 'email']
	  },
	  function(accessToken, refreshToken, profile, cb) {
	    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
	    //   return cb(err, user);
	    // });

	    let stmt = database.prepare("INSERT OR IGNORE INTO user VALUES (NULL,?,NULL,?,?)");
		stmt.run(profile._json.email,"user",1, (err,row)=>{
			stmt.finalize();
			// cb(null, profile);

			database.get("SELECT ID FROM user WHERE email = ?", [profile._json.email], (err,row)=>{
				// const token = jwt.sign({ userId: row.ID }, config.secret, { expiresIn: '24h'});
				// console.log(token);			
		    	cb(null, row.ID);
			});
		});		
	  }
	));

	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { failureRedirect: '/login' }),
	  function(req, res) {
	    // Successful authentication, redirect home.
	    res.redirect('/social/' + token);
  	});

  	app.get('/auth/facebook',
  		passport.authenticate('facebook', { scope: ['email'] }));

  	passport.serializeUser(function(user, cb) {
  	  token = jwt.sign({ userId: user }, config.secret, { expiresIn: '24h'});
	  cb(null, user);
	});

	passport.deserializeUser(function(obj, cb) {
		console.log("deserialize");
	  cb(null, obj);
	});

	return passport;
}