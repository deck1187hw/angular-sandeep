'use strict';

/* Controllers */

function GenericViewCtrl($scope, $filter) {
}
GenericViewCtrl.$inject = ['$scope'];


function YahoopipesCtrl($scope, $http, $filter, $sce, pipesService, $q) {

	  
	  
	  // We create a new object for the pipes with a promise to load the data
	  $scope.pipes = new Object();
	  
	  $scope.pipesService = pipesService;

	  var promise = $scope.pipesService.get();
	  
	  promise.then(
	  function(payload) {
	    $scope.pipes.stories = $scope.pipesService.data;
	    
	  });
	  
	  // This method will show the description and link
	  $scope.readMore = function(index)
	  {
		  var $storySingle = $('#story_'+index+' .description');
		  $storySingle.slideToggle( "slow" );
	  	
	  };
	      
    

}




