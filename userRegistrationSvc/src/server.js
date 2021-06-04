'use strict';

const Hapi = require('@hapi/hapi');
const getUser = require('./routes/users');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
  });

  server.route({
    method: 'GET',
    path: '/users',
    handler: getUser
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
