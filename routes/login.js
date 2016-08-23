//require
var db = require('../db');
var express = require('express');
var router = express.Router();


/* GET login listing. */
router.get('/', function(req, res, next) {
    res.cookie('test', '123');

    db.query('SELECT * FROM `user`', function(err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows);
    });

console.log(req.cookies.test);
//    res.sendFile(__dirname+'/../public/login.html');
    res.render('login', { title: 'Express' });
    //res.render('index');
});

router.get('/123', function(req, res, next) {


  res.send('respond with a resource 123');
});

module.exports = router;
