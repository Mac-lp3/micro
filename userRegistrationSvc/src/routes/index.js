const getUser = require('./users');

module.exports = [{
    method: 'GET',
    path: '/users',
    handler: getUser
}];