'use strict';

/* Services */

var services = angular.module('myApp.services', []);

services.value('version', '0.1');



services.factory('pipesService',function ($rootScope,$http){
    var server="http://pipes.yahoo.com/pipes/pipe.run?_id=5f0463ebf0e9f8c941befa5a13ed0a9b&limitpipe=10&_render=json&_callback=JSON_CALLBACK";
    return {
        data:{},
        get: function(){
            var self = this;
			return $http.jsonp(server).
                success(function(data, status, headers, config) {
                    self.data = data.value.items;                 
                }).
                error(function(data, status, headers, config) {
                    alert("ERROR: Could not get data.");
                });
        }
    }
});
