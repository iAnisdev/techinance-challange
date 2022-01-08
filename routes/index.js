var express = require('express');
var axios = require('axios')
var router = express.Router();

const { isLoggedIn} = require('./../middlewares/auth')


/* GET home page. */
router.get('/',isLoggedIn, async function(req, res, next) {
  let response = await axios.get('https://61d979dece86530017e3cb27.mockapi.io/users')
  res.render('index', { title: 'Employee List', users: response.data});
});

router.get('/users' ,isLoggedIn, async function(req, res, next) {
  let response = await axios.get('https://61d979dece86530017e3cb27.mockapi.io/users')
  res.json(response.data)
})

module.exports = router;
