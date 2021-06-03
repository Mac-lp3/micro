'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0'
  });

  server.route({
    method: 'GET',
    path: '/users',
    handler: (request, h) => {
      console.log('reached')
      return {
        id: 1,
        email: 'putin@kremlin.gov'
      };
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
