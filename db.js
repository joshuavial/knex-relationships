
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  updateUser: updateUser,
  updateProfile: updateProfile
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .join('profiles', 'users.id', 'profiles.users_id')
    .where('users.id', id)
}

function updateUser (newdata, connection) {
  var usersData = {
    name: newdata.UserName,
    email: newdata.email
  }
  return connection('users')
    .insert(usersData)
}

function updateProfile (newdata, connection, user_id) {
  var profilesData = {
    users_id: user_id,
    url: newdata.url,
    image_url: newdata.image_url
    }
  return connection('profiles')
    .insert(profilesData)
}
