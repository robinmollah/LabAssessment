var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/student/dashboard', function(req, res, next) {
    res.render('StudentDashboard');
});
router.get('/student/dashboard/test', function(req, res, next) {
    console.log(req);
});

module.exports = router;
