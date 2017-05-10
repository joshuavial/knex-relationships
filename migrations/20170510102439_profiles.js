
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('users_id')
    //table.foreign('users_id').references('users.id').onDelete('CASCADE')
    table.string('url')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('profiles')
};
