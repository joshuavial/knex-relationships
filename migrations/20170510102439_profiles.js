
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('users_id')
    table.string('url')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles')
};
