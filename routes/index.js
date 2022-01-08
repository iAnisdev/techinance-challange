var express = require('express');
var router = express.Router();

const { isLoggedIn} = require('./../middlewares/auth')

let users = require('./../data/users.json')

/* GET home page. */
router.get('/',isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Employee List', users});
});

router.get('/users' ,isLoggedIn, function(req, res, next) {
  res.json(users)
})

module.exports = router;
