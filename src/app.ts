require('dotenv').config()
import * as restify from 'restify'
import * as cds from './telematics/CollisionDetectionService'
import * as bc from './bots/Connectors'

const server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url)
})

server.use(restify.bodyParser())
server.post(cds.serviceUrl, cds.requestHandler)
server.post(bc.serviceUrl, bc.requestHandler)
