var express = require('express');
var router = express.Router();
const { isLoggedIn, isLoggedOut} = require('./../middlewares/auth')
/* GET login page. */
router.get('/login',isLoggedOut , function(req, res, next) {
  res.render('login', { title: 'Welcome to App',messages: req.flash()});
});

/* POST login page. */
router.post('/login' ,isLoggedOut, function(req , res , next) {
  const {username , password} = req.body
  if(username === 'admin' && password === 'pass'){
    res.cookie('auth_status' , 'login')
    res.redirect('/')
  }else{
    req.flash('error' , 'invalid Credentials')
    res.redirect('/login')
  }
})

router.get('/logout' , isLoggedIn, function(req , res , next){
  res.cookie('auth_status' , 'logout')
  req.flash('success' , 'Logout Successfully')
  res.redirect('/login')
})
module.exports = router;
