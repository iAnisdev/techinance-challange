var express = require('express');
var router = express.Router();

const { isLoggedIn} = require('./../middlewares/auth')

let users = require('./../data/users.json')

/* GET home page. */
router.get('/',isLoggedIn, function(req, res, next) {
  if(req.cookies['auth_status'] == 'login'){

    res.render('index', { title: 'Employee List', users});
  }else{
    req.flash('error' , 'Please Login First')
    res.redirect('/login')
  }
});

router.get('/users' ,isLoggedIn, function(req, res, next) {
  res.json(users)
})

module.exports = router;
