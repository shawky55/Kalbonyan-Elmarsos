// const { application, request, response } = require('express');
const path = require('path');
const messagesController = require('./controller/messages.controller');
const userController = require('./controller/users.controller');
const usersRouter = require('./routers/users.router');
const messagesRouter = require('./routers/messages.router');
let express = require('express');
const { application } = require('express');
const { patch } = require('./routers/users.router');
const myserver = express();
myserver.set('view engine', 'hbs');
myserver.set('views', path.join(__dirname, 'views'));
const PORT = 3090;
// const UsersData = [
//   {
//     id: 100,
//     name: 'osama youes',
//     age: '54',
//     location: 'sudan',
//   },
//   {
//     id: 101,
//     name: 'Ahemd Yousef',
//     age: '34',
//     location: 'Egypt',
//   },
//   {
//     id: 102,
//     name: 'esraa mohamed',
//     age: '30',
//     location: 'tunsia',
//   },
// ];
myserver.listen(PORT, () => {
  console.log('port', PORT);
});

myserver.get('/', (request, response) => {
  response.send('Main Page');
});
myserver.get('/helloworld', (request, response) => {
  response.send('Hello world');
});

myserver.use('/messages', messagesRouter);

myserver.use(express.json());
// myserver.get('/users', userController.getUserList);
// myserver.post('/users', userController.postUser);
// myserver.get('/users/:userId', userController.getUser);
myserver.use('/users', usersRouter);
myserver.use(function (request, response, next) {
  console.log(`request method:${request.method},request Url :${request.url}`);
  const currnet = Date.now();
  // function express give us to execute next middleware
  //function control flaw of middleware
  next();
  const expirationTime = Date.now() - currnet;
  // console.log(request.method, expirationTime, 'ms');
  console.log(
    `${request.method} ${request.baseUrl}${request.url}${expirationTime}`
  );
});
myserver.use('/website', express.static('public'));
myserver.use('website', express.static(path.join(__dirname, 'public')));
