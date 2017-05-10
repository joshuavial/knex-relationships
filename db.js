
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  updateUser: updateUser,
  updateProfile: updateProfile,
  deleteUser: deleteUser,
  deleteProfile: deleteProfile,
  addUser
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

function deleteUser (id, connection) {
  return connection('users')
  .where('users.id', id)
  .del()
}

function deleteProfile (id, connection) {
  console.log(id);
  return connection('profiles')
  .where('profiles.users_id', id)
  .del()
}

function addUser (data, connection) {
  return connection('users')
    .insert({name: data.name, email: data.email})
    .then((user_ids) => {
      return connection('profiles')
        .insert({
          users_id: user_ids[0],
          url: data.url,
          image_url: data.image_url
        })
    })
}
