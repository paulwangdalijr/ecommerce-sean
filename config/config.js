const crypto = require('crypto').randomBytes(256).toString('hex');
const fs = require('fs'); //image uploads
var path = require('path');

const dir = path.join(__dirname + "/../images");

// console.log(dir);

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

module.exports =
{
	secret: crypto
}