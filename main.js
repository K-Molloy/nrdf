const config = require('./config')

const restify = require('restify');
const compression = require('compression')
const MongoClient = require('mongodb').MongoClient;
const bunyan = require('bunyan');

var log = bunyan.createLogger({ name: 'nrod-api' });

MongoClient.connect(config.mongo.connectionString, (err, db) => {
    var server = restify.createServer({
        log: log,
        name: 'nrod-api'
    })
    server.on('after', restify.plugins.auditLogger({
        log: log
    }));

<<<<<<< HEAD
	server.get( '/test', function (req, resp, next)
	{
		var collection = db.collection('trains')
		collection.find({'movementActive':true, 'tdActive': true, 'lastSeen.location.TIPLOC': 'LEWISHM'}).toArray( (error, doc) => {
         log.debug(doc)
			resp.end(JSON.stringify(doc))
         next()
		})
	})
=======
    server.get('/test', function(req, resp, next) {
        var collection = db.collection('TRAINS')
        collection.find({ 'movementActive': true, 'tdActive': true, 'lastSeen.location.TIPLOC': 'LEWISHM' }).toArray((error, doc) => {
            log.debug(doc)
            resp.end(JSON.stringify(doc))
            next()
        })
    })
>>>>>>> 0c96efc82b89a62f82298b0117d9ae03da17c5b0

    server.listen(3000, () => {
        log.info('%s listening at %s', server.name, server.url)
    })
})