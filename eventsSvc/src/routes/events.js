
const eventRoutes = (function() {

    const DEFAULT_LIMIT = 10
    const DEFAULT_OFFSET = 0

    async function getEvents(limit, offset) {

        let events = []
        try {

            events.push({
                type: 'INTERACTION',
                payload: {
                  type: 'VIEW',
                  timestamp: new Date(),
                  origin: {
                      id: 'abcd1234',
                      type: 'mobile app'
                  }
                }
            })

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse(events, {})
    }
    
    async function createEvent(eid) {
        try {

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse({}, {})
    }
    
    async function deleteEvent(eid) {
        try {

        } catch (any) {
            return buildErrorResponse(any)
        }

        return buildResourceResponse({}, {})
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
