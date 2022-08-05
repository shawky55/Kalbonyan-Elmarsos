const usersModal = require('../models/users');

function postUser(request, response) {
  if (!request.body.name) {
    return response.status(400).json({
      error: 'missing user name',
    });
  }
  const newUser = {
    name: request.body.name,
    id: usersModal.UsersData.length + 100,
  };
  usersModal.UsersData.push(newUser);
  response.json(newUser);
}
function getUser(request, response) {
  const userId = +request.params.userId;
  console.log(userId);
  const user = usersModal.UsersData.filter((user) => user.id === userId);

  if (!user) {
    response.status(404).json({
      staus: 'failed',
      error: 'user not found',
    });
  } else {
    response.json(user);
  }
}

function getUserList(request, response) {
  response.send(usersModal.UsersData);
}
module.exports = {
  getUser,
  postUser,
  getUserList,
};
