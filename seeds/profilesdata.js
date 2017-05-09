
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, users_id: 99901, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 2, users_id: 99902, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 3, users_id: 99903, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 4, users_id: 99904, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 5, users_id: 99905, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 6, users_id: 99906, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'},
        {id: 7, users_id: 99907, url: 'https://google.com', image_url: 'http://imgur.com/gallery/bEfLo'}
      ]);
    });
};
