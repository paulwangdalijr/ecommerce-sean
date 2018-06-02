

const multer = require('multer');

const store = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, './images' );
  },
  filename: (req,file,cb)=>{
    cb(null, file.originalname + ".jpg");
  }
});
const upload = multer({ storage:store }).single('file');

module.exports = upload;