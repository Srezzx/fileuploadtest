const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.post("/search", async (req, res) => {
  console.log(req.body);
  var x = req.body.str;
  const result = await cloudinary.v2.search
    .expression("@vitstudent.ac.in")
    .max_results(500)
    .execute()
    .then((result) => {
      var names = [];
      result.resources.forEach(function (resource) {
        names.push(resource.filename);
      });
      console.log(names);
      console.log(names.length);
      var counter = 0;
      names.forEach(function (name) {
        if (name === x) {
          counter = 1;
        }
      });
      if (counter === 1) {
        return res.json({
          status: "Success",
          msg: "Successfully found the resume",
        });
      } else counter === 1;
      {
        return res.json({
          status: "Failed",
          msg: "Could not find the resume",
        });
      }
    });
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      use_filename: true,
      public_id: req.body.id,
      folder: "Esummit21",
    });
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
