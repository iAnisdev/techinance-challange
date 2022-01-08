var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  if(req.cookies['auth_status'] == 'logout'){
  res.render('login', { title: 'Welcome to App',messages: req.flash() ,  success: '' , error: ''  });
  }else{
    res.redirect('/')
  }
});

/* POST login page. */
router.post('/login' , function(req , res , next) {
  const {username , password} = req.body
  if(username === 'admin' && password === 'pass'){
    res.cookie('auth_status' , 'login')
    res.redirect('/')
  }else{
    req.flash('error' , 'invalid Credentials')
    res.redirect('/login')
  }
})

router.get('/logout' ,  function(req , res , next){
  if(req.cookies['auth_status'] == 'login'){
    res.cookie('auth_status' , 'logout')
    req.flash('success' , 'Logout Successfully')
    res.redirect('/login')
  }else{
    res.redirect('/login')
  }
})
module.exports = router;
