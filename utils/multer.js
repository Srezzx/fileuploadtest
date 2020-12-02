const multer = require('multer');
const path  = require('path');

//MULTER CONFIG
module.exports = multer({
    storage: multer.diskStorage({}),
    // fileFilter:(req,file,cb) => {
    //     let ext = path.extname(file.orignalname);
    //     cb(null,true);
    // },
});