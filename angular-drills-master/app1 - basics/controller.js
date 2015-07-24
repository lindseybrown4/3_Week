var ourModule = angular.module('basicsApp')

ourModule.controller('basicsController',function($scope, basicsService){  //step 5 add basicsSercice
	$scope.words = basicsService.getMeWords(); //changed from "get me words"  // step 6 add basicsSerice

});

//step 3 