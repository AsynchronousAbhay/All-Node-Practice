var express = require('express');
var router = express.Router();

const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get('/', function (req, res, next) {
  const files = fs.readdirSync(path.join(__dirname, "..", "public", "Filefolder"))

  res.render('index', { files });
});

router.post('/create', function (req, res, next) {
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "Filefolder", req.body.filename),
    "enter herree!!!"
  )
  res.redirect("/");
});

module.exports = router;
