const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.post("/", upload.single("image"), async (req, res) => {
  try {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      use_filename: true,
      public_id:req.body.id,
      folder:"Esummit21"
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
