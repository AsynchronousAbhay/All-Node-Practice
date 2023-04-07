var express = require('express');
var router = express.Router();

const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get('/', function (req, res, next) {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "public", "Filesystem")
  );

  res.render('index', { files });
});

router.post('/create', function (req, res, next) {
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "Filesystem", req.body.filename),
    "hello world!!"
  );

  res.redirect("/");

});

module.exports = router;
