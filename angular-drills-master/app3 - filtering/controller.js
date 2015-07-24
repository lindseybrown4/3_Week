angular.module("filteringApp").controller("filteringController", function($scope, filteringService) {
			$scope.people = filteringService.getPeople(); 
	}); //end angular controller