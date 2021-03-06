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

test('GET /user/new', (t) => {
  return request(t.context.app)
    .get('/user/new')
    .expect(200)
    .then((res) => {
      let $ = cheerio.load(res.text)
      t.is($('form').length, 1)
    })
})


test('POST /users', (t) => {
  return request(t.context.app)
    .post('/users')
    .send({
      name: 'bob',
      email: 'bob@email.com',
      url: 'my-url',
      image_url: 'image-url'
    })
    .expect(302)
    .then((res) => {
      return t.context.connection('users').select()
    })
    .then((users) => {
      t.is(users.length, 12)
      return t.context.connection('profiles').select()
    })
    .then((profiles) => {
      t.is(profiles.length, 12)
    })

})
