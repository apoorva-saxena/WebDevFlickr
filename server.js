'use strict'
const express = require('express')
const server = express();
const bodyParser = require('body-parser');
const feed_data = require('./scripts/feed_data_service')

// server.use(bodyParser.urlencoded())
server.use(bodyParser.json());

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.use(express.static(__dirname + '/app'));

server.get('/api/feeds', function(req, res) {
	async function getFeeds () {
		const feeds = await feed_data.getFeedData()
		res.send(feeds)
	}
	getFeeds()
})

//listen to server
server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server