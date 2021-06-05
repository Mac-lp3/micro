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

  // how to do the responses?
  // keep it simple/inline?
  //  would be easiest. 
  const getUser = async (request, h) => {
    const mapKey = requests.params.id
    const usr = MEM_STORE.get(mapKey)

    return usr ? resourceResponse(usr) : resourceResponse({}, 404)
  }

  const postUser = async (request, h) => {}

  const patchUser = async (request, h) => {}

  const resourceResponse = (resource, code) => {

    return {
      metadata: {
        httpCode: code ? code : 200
      },
      payload: resource
    }

  }

  const errorResponse = (error) => {
    return {
      metadata: {
        httpCode: error.httpCode
      },
      error: error
    }
  }

  return {
    getUser: {},
    patchUser: {},
    postUser: {}
  }

})()

module.exports = userMethods.getUser