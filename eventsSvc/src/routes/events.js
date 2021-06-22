const createHash = require('crypto').createHash

const eventRoutes = (function() {

    const ID_LENGTH = 10
    const DEFAULT_LIMIT = 10
    const DEFAULT_OFFSET = 0
    const EVENTS = []

    async function getEvents(limit, offset) {

        try {

            EVENTS.push({
                id: 'abcd1234',
                type: 'INTERACTION',
                payload: {
                  type: 'VIEW',
                  timestamp: new Date(),
                  origin: {
                      id: 'dist/v2.3.12',
                      type: 'mobile app'
                  }, actor: {
                      id: '1',
                      type: 'user'
                  }
                }
            })

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse(EVENTS, {})
    }
    
    async function createEvent(reqBody) {

        let newEvent = {}
        try {

            newEvent = {
                id: generateUid(reqBody),
                type: reqBody.type,
                payload: {
                    type: reqBody.subtype,
                    timestamp: reqBody.timestamp,
                    origin: {
                        id: reqBody.origin.id,
                        type: reqBody.origin.type
                    }, actor: {
                        id: reqBody.actor.id,
                        type: reqBody.actor.type
                    }
                }
            }
            EVENTS.push(newEvent)

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse(newEvent, {})
    }
    
    async function deleteEvent(eid) {
        try {

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse({}, {})
    }

    function generateUid(newEvent) {

        const current_date = (new Date()).valueOf().toString()
        let random = Math.random().toString()
        let uid = createHash('md5').update(current_date + random).digest('hex').substring(0, ID_LENGTH)

        // keep trying until we get a unique one
        while (EVENTS.find(evnt => evnt.id === uid)) {
            console.log('Generated non-unique id. Trying again...')
            random = Math.random().toString()
            uid = createHash('md5').update(current_date + random).digest('hex').substring(0, ID_LENGTH)
        }

        return uid

    }

    function buildResourceResponse(data, metaProps) {
        const resp = {
            metadata: {
                httpCode: metaProps.httpCode ? metaProps.httpCode : 200
            },
            payload: data
        }

        if (Object.hasOwnProperty(metaProps, 'total')) {
            resp.metadata.total = metaProps.total
        }

        return resp
    }

    function buildErrorResponse(anyErr, metaProps) {
        const resp = {
            metadata: {
                httpCode: 500
            },
            error: anyErr
        }

        return resp
    }

    return {
        getEvents: getEvents,
        createEvent: createEvent,
        deleteEvent: deleteEvent
    }

})()


module.exports.getEvents = eventRoutes.getEvents
module.exports.createEvent = eventRoutes.createEvent
module.exports.deleteEvent = eventRoutes.deleteEvent
