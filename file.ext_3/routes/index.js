var express = require('express');
var router = express.Router();

const path = require("path");
const fs = require("fs");  

/* GET home page. */
router.get('/', function(req, res, next) {
  const files  = fs.readdirSync(
    path.join("dirname","..", "public", "Filesystem")
  )

  res.render('index', { files, filedata:null });
});

router.get('/file/:filename', function(req, res, next) {
  const files  = fs.readdirSync(
    path.join("dirname","..", "public", "Filesystem")
  )

  const filedata  = fs.readFileSync(
    path.join("dirname","..", "public", "Filesystem",req.params.filename),
    "utf-8"
  )

  res.render('index', { files, filedata })
});

router.post('/create', function(req, res, next) {
  fs.writeFileSync(
    path.join("dirname","..", "public", "Filesystem", req.body.filename),
    "hello world!!!"
  );

  res.redirect("/file" + req.body.filename);
});

module.exports = router;
