const userMethods = (function() {

  const MEM_STORE = new Map()

  MEM_STORE.set(1, {
    id: 1,
    name: 'Emperor Putin',
    email:'putin@kgb.org'
  })

  MEM_STORE.set(2, {
    id: 2,
    name: 'Tiki Tony',
    email:'tony@tiki.gov'
  })

  async function getUser(request, h) {
    
  }

  async function patchUser(request, h) {}
  async function postUser(request, h) {}

  return {
    getUser: {},
    patchUser: {},
    postUser: {}
  }

})()

module.exports = userMethods.getUser