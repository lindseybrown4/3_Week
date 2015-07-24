app.controller('apiController', function($scope, starWarsService){


//Ask the question : first
	var promise = starWarsService.getStarWarsPeople(); 
//The guy at the top listening. Will get the answer last.
	var recievePerson = function(person) {
		$scope.swPerson  = person.data; 
	}

	promise.then(recievePerson); 
});