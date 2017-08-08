(function() {
    var app = angular.module("FlickrApp", []);
    app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
    app.controller('FeedController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/feeds',
        }).then(function successCallback(response) {
            console.log("==============response")
            console.log(response.data.items)
            $scope.feeds = response.data.items
        }, function errorCallback(response) {
            console.log("error: ", response)
        });

        // $scope.renderHtml = function(html_code) {
        // 	console.log(html_code)
        //     return $sce.trustAsHtml(html_code);
        // };

    })


})();