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
  db.getUser(req.params.id, req.app.get('connection'))
    .first()
    .then( (profile) => {
      res.render('user', profile)
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
  res.redirect('/')
})

router.get('/delete/:id', function (req, res) {
  var id = req.params.id
  var connection = req.app.get('connection')
  db.deleteUser(id, connection)
    .then(() => {
      return db.deleteProfile(id, connection)
    })
    .then(() => {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})



module.exports = router
