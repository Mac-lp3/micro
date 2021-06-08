'use strict';

const should = require('chai').should();
const userRoutes = require('../src/routes/users')

describe('routes/users handler', function() {

    it('returns a user (happy path)', async function() {
        let resp = await userRoutes.getUser({ params: { id: 1 } })
        resp.metadata.httpCode.should.equal(200)

        resp = await userRoutes.getUser({ params: { id: 2 } })
        resp.metadata.httpCode.should.equal(200)
    })

    it('doesn\'t return a user (hapy path)', async function() {
        let resp = await userRoutes.getUser({ params: { id: 99 } })
        resp.metadata.httpCode.should.equal(404)
    })

    it('creates a user (happy path)', async function() {
        let form = {
            payload: {
                name: 'bart simpson',
                email: 'bart@earthlink.net'
            }
        }

        let resp = await userRoutes.postUser(form)
        resp.metadata.httpCode.should.equal(201)
        resp.payload.id.should.equal(3)
    })

    it('updates single fields (happy path)', async function() {

        let resp = await userRoutes.getUser({ params: { id: 3 } })
        resp.payload.name.should.equal('bart simpson')

        let form = {
            params: {
                id: 3
            },
            payload: {
                name: 'bort sampson'
            }
        }

        resp = await userRoutes.patchUser(form)
        resp.metadata.httpCode.should.equal(200)
        resp.payload.id.should.equal(3)
        resp.payload.name.should.equal('bort sampson')
    })
})
