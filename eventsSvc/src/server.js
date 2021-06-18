const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const rt = new Router()

rt.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa'
})

app.use(rt.routes())
app.use(rt.allowedMethods())

app.listen(3030)