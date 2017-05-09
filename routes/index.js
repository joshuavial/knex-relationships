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
  db.getProfiles(id, connection)
    .where('id', id)
    .then( (profiles) => {
      console.log(profiles);
      res.render('user', { profiles })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
