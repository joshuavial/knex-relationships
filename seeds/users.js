exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org'}),
        knex('users').insert({id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org'}),
        knex('users').insert({id: 99903, name: 'Curious Capybara', email: 'capybara@example.org'}),
        knex('users').insert({id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org'}),
        knex('users').insert({id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org'}),
        knex('users').insert({id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'}),
        knex('users').insert({id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org'}),
        knex('users').insert({id: 99908, name: 'Hilarious Heron', email: 'heron@example.org'}),
        knex('users').insert({id: 99909, name: 'Intransigent Impala', email: 'impala@example.org'}),
        knex('users').insert({id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org'}),
        knex('users').insert({id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org'})
      ]);
    });
};
