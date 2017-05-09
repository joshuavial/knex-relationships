
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .join('profiles', 'users.id', 'profiles.users_id')
    .where('users.id', id)

}
