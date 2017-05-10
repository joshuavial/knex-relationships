
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, users_id: 99901, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 2, users_id: 99902, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 3, users_id: 99903, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 4, users_id: 99904, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 5, users_id: 99905, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 6, users_id: 99906, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 7, users_id: 99907, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 8, users_id: 99908, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 9, users_id: 99909, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 10, users_id: 99910, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'},
        {id: 11, users_id: 99911, url: 'https://google.com', image_url: 'http://floodmagazine.com/wp-content/uploads/2016/07/Steve_Brule-2016-Marc_Lemoine-3-805x991.jpg'}
      ]);
    });
};
