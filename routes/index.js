var express = require('express');
var router = express.Router();
var main = require('../scripts/main');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/student/dashboard', function(req, res, next) {
    res.render('StudentDashboard');
});

router.get('/compile/:file_name', function(req, res, next){
  console.log("Req", req.params.file_name);
  res.send(main.compile(req.body.file_name));
});

router.post('/run', function(req, res, next){
  res.send(main.run(req.body.file_name));
});

router.post('/test', function(req, res, next){
  res.send(main.test(req.body.file_name));
});

module.exports = router;
