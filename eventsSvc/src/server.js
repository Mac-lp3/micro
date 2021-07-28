/**
 * This service is only needed for this poc.
 * 
 * An interactions service would better, but this allows all events to be displayed on a UI.
 */
'use strict'

const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const { createEvent, deleteEvent, getEvents } = require('./routes/events')

const BASE_URL = '/api/v1'

const app = new Koa()
app.use(bodyParser())
const rt = new Router({
    prefix: `${BASE_URL}`
})

rt.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa'
})

rt.get('/events', async (ctx, next) => {
    const lim = ctx.params.limit ? ctx.params.limit : undefined
    const oset = ctx.params.offset ? ctx.params.offset : undefined
    const eventResponse = await getEvents(lim, oset)

    ctx.body = {
        metadata: eventResponse.metadata,
        payload: eventResponse.payload
    }
})

rt.post('/events', async (ctx, next) => {
    const eventResponse = await createEvent(ctx.request.body)

    ctx.body = {
        metadata: eventResponse.metadata,
        payload: eventResponse.payload
    }
})

rt.delete('/events/:eid', (ctx, next) => {
    ctx.body = `delete event ${ctx.params.eid}`
})

app.use(rt.routes())
app.use(rt.allowedMethods())
app.listen(3030)
