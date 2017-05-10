var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/user/:id', function (req, res) {
  var id = req.params.id
  var connection = req.app.get('connection')
  db.getUser(id, connection)
    .then( (profiles) => {
      res.render('user', profiles[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', function (req, res) {
  var newdata = req.body
  var connection = req.app.get('connection')
  db.updateUser(newdata, connection)
    .then((user) => {
      console.log(user);
      db.updateProfile(newdata, connection, user[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

  // console.log(newdata);
  res.redirect('/')
})



module.exports = router
