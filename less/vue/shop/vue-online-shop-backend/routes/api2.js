var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 渲染模板
  // res.render('index', { title: 'Express' });
  res.json({
    mes: 'hello world'
  })
});

module.exports = router;
