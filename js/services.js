'use strict';

/* Services */

var services = angular.module('myApp.services', []);

services.value('version', '0.1');

/********************/
/* This service for local storage data*/
/********************/

services.factory("LS", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'wallet-storage1') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(val) {
      $window.localStorage && $window.localStorage.setItem('wallet-storage1', JSON.stringify(val));
      return this;
    },
    getData: function() {
    	var data = $window.localStorage && $window.localStorage.getItem('wallet-storage1');
    	if(data){
	    	return JSON.parse(data);
    	}
      
    }
  };
});



/********************/
/* This service for local storage data */
/********************/

services.factory('pipesService',function ($rootScope,$http){
    var server="http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json&_callback=JSON_CALLBACK";
    return {
        data:{},
        get: function(){
            var self = this;
            $http.jsonp(server).
                success(function(data, status, headers, config) {
                    return data.value.items;
                }).
                error(function(data, status, headers, config) {
                    alert("ERROR: Could not get data.");
                });
        }
    }
});
