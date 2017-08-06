(function() {
    var app = angular.module("FlickrApp", []);

    app.controller('FeedController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/feeds',
        }).then(function successCallback(response) {
        	// const feeds_data = toJson(response.data)
        	console.log("I reach here")
        	console.log(response.data.items )
        	$scope.feeds = response.data.items
        }, function errorCallback(response) {
            console.log("error: ", response)
        });
    })


})();