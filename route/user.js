const router = require('express').Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

router.post('/',upload.single('image'),async(req,res) => {
    try{
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        console.log(result);
        res.json(result);
    }
    catch(err)
    {
        console.log(err);
    }
});

module.exports = router;
