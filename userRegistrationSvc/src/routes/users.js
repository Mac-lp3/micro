'use strict';

const userMethods = (function() {

  const MEM_STORE = new Map()

  MEM_STORE.set('1', {
    id: '1',
    name: 'Emperor Putin',
    email:'putin@kgb.org'
  })

  MEM_STORE.set('2', {
    id: '2',
    name: 'Tiki Tony',
    email:'tony@tiki.gov'
  })

  const getUser = async (request, h) => {
    const mapKey = request.params.id
    const usr = MEM_STORE.get(mapKey)

    return usr ? resourceResponse(usr) : errorResponse({}, 404)
  }

  const postUser = async (request, h) => {

    let newUser = false

    // TODO ID gen in a util function
    for(let i = 2; i < 500; ++i) {
      if (!MEM_STORE.has(`${i}`)) {

        // TODO validation in hapi
        newUser = {
          id: `${i}`,
          name: request.payload.name,
          email: request.payload.email
        }

        MEM_STORE.set(`${i}`, newUser)

        break
      }
    }

    return newUser ? resourceResponse(newUser, 201) : errorResponse({}, 503)
  }

  const patchUser = async (request, h) => {
    const mapKey = request.params.id
    const usr = MEM_STORE.get(mapKey)

    if (usr) {
      usr.name = request.payload.name ? request.payload.name : usr.name
      usr.email = request.payload.email ? request.payload.email : usr.email

      MEM_STORE.set(mapKey, usr)
    }
    
    return usr ? resourceResponse(usr) : errorResponse({}, 404)
  }

  const resourceResponse = (resource, code) => {

    return {
      metadata: {
        httpCode: code ? code : 200
      },
      payload: resource
    }

  }

  const errorResponse = (error, code) => {
    return {
      metadata: {
        httpCode: code ? code : 200
      },
      error: error
    }
  }

  return {
    getUser: getUser,
    postUser: postUser,
    patchUser: patchUser
  }

})()

module.exports.getUser = userMethods.getUser
module.exports.postUser = userMethods.postUser
module.exports.patchUser = userMethods.patchUser