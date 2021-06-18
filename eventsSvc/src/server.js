const Koa = require('koa')
const Router = require('@koa/router')
const { createEvent, deleteEvent, getEvents } = require('./routes/events')

const BASE_URL = '/api/v1'

const app = new Koa()
const rt = new Router({
    prefix: `${BASE_URL}`
})

rt.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa'
})

rt.get('/events', (ctx, next) => {
    const lim = ctx.params.limit ? ctx.params.limit : undefined
    const oset = ctx.params.offset ? ctx.params.offset : undefined
    const eventObjects = await getEvents(lim, oset)

    ctx.body = 'some events'
})

rt.post('/events', (ctx, next) => {
    ctx.body = 'some new events'
})

rt.delete('/events/:eid', (ctx, next) => {
    ctx.body = `delete event ${ctx.params.eid}`
})

app.use(rt.routes())
app.use(rt.allowedMethods())

app.listen(3030)
