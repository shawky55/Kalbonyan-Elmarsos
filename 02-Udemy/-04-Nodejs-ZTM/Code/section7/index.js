const http = require('http');
const { type } = require('os');
const PORT = 5522;
const server = http.createServer();
const UsersData = [
  {
    id: 1111,
    name: 'osama youes',
    age: '54',
    location: 'sudan',
  },
  {
    id: 4343,
    name: 'Ahemd Yousef',
    age: '34',
    location: 'Egypt',
  },
  {
    id: 8383,
    name: 'esraa mohamed',
    age: '30',
    location: 'tunsia',
  },
];
server.on('request', (request, response) => {
  const urlPrama = request.url.split('/');
  console.log(urlPrama[1]);
  if (urlPrama[1] === 'message') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    });
    response.end(
      JSON.stringify({
        id: 444,
        time: '8:44',
        message: 'first Message form node server',
      })
    );
  } else if (urlPrama[1] === 'greeting') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<body>');
    response.write('<ul>');
    response.write('<li>Hello Mohamed!</li>');
    response.write('<li>how are you today?</li>');
    response.write('</ul>');
    response.write('</body>');
    response.write('</html>');
    response.end();
  } else if (urlPrama[1] == 'users' && request.method === 'POST') {
    request.on('data', (data) => {
      const newUser = data.toString();
      friends.push(JSON.parse(newUser));
    });
    request.pipe(response);
  } else if (urlPrama.length == 2 && urlPrama[1] == 'users') {
    response.writeHead(200, {
      'Content-Type': 'text',
    });
    response.end('you must insert ID of user ');
  } else if (urlPrama.length === 3) {
    //get data of user
    response.writeHead(200, {
      'Content-Type': 'application/json',
    });
    const userId = +urlPrama[2];
    const indeXof = UsersData.findIndex((obj) => {
      return obj.id === userId;
    });
    console.log('index', indeXof);
    const user = UsersData[indeXof];
    console.log(typeof body);
    response.end(JSON.stringify(user));
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(PORT, () => {
  console.log('Listen to port', PORT);
});
