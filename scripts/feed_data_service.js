const request = require('request')

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

const feed_data = {
	getFeedData : async function () {
		return new Promise (function (resolve, reject) {
			request('http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1', function(error, response, body) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            })
		})
	}
}

module.exports = feed_data;