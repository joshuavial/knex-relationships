var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      t.true(res.text.indexOf('Aardvark') > -1)
    })
})

test('GET /user/:id', (t) => {
  return request(t.context.app)
    .get('/user/99902')
    .expect(200)
    .then((res) => {
      t.true(res.text.indexOf('Baboon') > -1)
      t.is(res.text.indexOf('Aardvark'), -1)
    })
})

