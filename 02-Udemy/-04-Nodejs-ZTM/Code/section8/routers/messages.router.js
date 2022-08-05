const express = require('express');
const messageRouter = express.Router();
const messagesController = require('../controller/messages.controller');
messageRouter.get('/', messagesController.getMessages);
messageRouter.post('/', messagesController.postMessage);

module.exports = messageRouter;
