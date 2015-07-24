arrayApp.controller("arrayController", function($scope, arrayService){  //step 3  //step 7 adding arrayService

	// $scope.dogs = "huskey, Beagle, Shitsu";   //step 4 test
	$scope.people = arrayService.getPeople();  //step 11




}); //end of controller