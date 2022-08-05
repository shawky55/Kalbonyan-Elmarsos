const express = require('express');
const usersController = require('../controller/users.controller');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log('ip address', req.ip);
  next();
});

usersRouter.get('/', usersController.getUserList);
usersRouter.post('/', usersController.postUser);
usersRouter.get('/:userId', usersController.getUser);
module.exports = usersRouter;
